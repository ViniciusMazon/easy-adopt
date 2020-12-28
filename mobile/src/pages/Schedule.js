import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { getDay, format, addDays } from 'date-fns';
import * as Yup from 'yup';
import { ValidationError } from 'yup';
import api from '../services/api';

import TopBar from '../components/TopBar';
import Section from '../components/Section';
import ScheduleItem from '../components/ScheduleItem';

export default function Schedule() {
  const navigation = useNavigation();
  const route = useRoute();

  const morningTime = '09:00 às 11:00';
  const afternoonTime = '14:00 às 17:00';

  const params = route.params;
  const request = params.request;
  const [isLoading, setIsLoading] = useState(false);
  const [validSchedule, setValidSchedule] = useState([]);
  const [dateActive, setDateActive] = useState(-1);

  useEffect(() => {
    let dateList = [];

    for (var i = 1; i < 8; i++) {
      let tempDate = addDays(new Date(), i);
      const numberWeekday = Number(getDay(tempDate));

      if (numberWeekday > 0 && numberWeekday < 6) {
        let tmpWeekday = '';

        switch (numberWeekday) {
          case 1:
            tmpWeekday = 'Segunda-Feira';
            break;
          case 2:
            tmpWeekday = 'Terça-Feira';
            break;
          case 3:
            tmpWeekday = 'Quarta-Feira';
            break;
          case 4:
            tmpWeekday = 'Quinta-Feira';
            break;
          case 5:
            tmpWeekday = 'Sexta-Feira';
            break;
          default:
            tmpWeekday = '';
        }

        dateList.push({
          weekday: tmpWeekday,
          date: format(tempDate, 'dd/MM/yyyy'),
          period: morningTime,
        });

        dateList.push({
          weekday: tmpWeekday,
          date: format(tempDate, 'dd/MM/yyyy'),
          period: afternoonTime,
        });
      }
    }

    setValidSchedule(dateList);
  }, []);

  async function handleSubmit() {
    if (dateActive >= 0) {
      setIsLoading(true);
      try {
        const schema = Yup.object().shape({
          date: Yup.date().required(),
          period: Yup.string().required(),
          adoption_request_id: Yup.string().required(),
        });

        const splittedDate = validSchedule[dateActive].date.split('/');

        const scheduleData = {
          date: format(
            new Date(
              `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
            ),
            'yyyy-MM-dd'
          ),
          period: validSchedule[dateActive].period,
          adoption_request_id: request.id,
        };

        await schema.validate(scheduleData, {
          abortEarly: false,
        });

        await api.post('/schedule', scheduleData);

        navigation.navigate('Success', {
          message: {
            title: 'Agendamento concluído!',
            content: 'Seu agendamento foi concluído com sucesso.',
            redirect: 'Animals',
          },
        });
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        if (error instanceof ValidationError) {
          Alert.alert(
            'Dados inválidos',
            'Selecione uma data',
            [
              {
                text: 'Ok',
                onPress: () => {},
                style: 'cancel',
              },
            ],
            { cancelable: false }
          );
        } else {
          console.log(error);
          Alert.alert(
            'Ocorreu um erro inesperado',
            'Por favor, tente novamente mais tarde',
            [
              {
                text: 'Ok',
                onPress: () => {},
                style: 'cancel',
              },
            ],
            { cancelable: false }
          );
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <Section
        title={'Agende uma visita'}
        subtitle={`Selecione um dos horários disponíveis esta semana`}
        newStyles={{ marginBottom: 40, marginTop: 30 }}
      />

      <ScrollView style={styles.inputGroup}>
        {validSchedule.map((item, index) => {
          return (
            <ScheduleItem
              key={index}
              id={index}
              weekday={item.weekday}
              date={item.date}
              period={item.period}
              active={dateActive}
              setActive={setDateActive}
            />
          );
        })}
      </ScrollView>

      <RectButton style={styles.button} onPress={handleSubmit}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Agendar</Text>
        )}
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 29,
    backgroundColor: '#fff',
  },
  inputGroup: {
    width: '100%',
    maxHeight: 370,
  },
  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#FA5293',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 39,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
