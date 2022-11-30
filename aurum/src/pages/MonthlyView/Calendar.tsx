import { View, Text, FlatList, Dimensions, Pressable, Alert } from 'react-native'
import React, { useEffect } from 'react'
import AngerSvg from '../../../assets/icons/Sentiment/anger.svg';
import AnxietySvg from '../../../assets/icons/Sentiment/anxiety.svg';
import EmbarrassmentSvg from '../../../assets/icons/Sentiment/embarrassment.svg';
import HappinessSvg from '../../../assets/icons/Sentiment/happiness.svg';
import InjurySvg from '../../../assets/icons/Sentiment/injury.svg';
import SadnessSvg from '../../../assets/icons/Sentiment/sadness.svg';
import DefaultSvg from '../../../assets/icons/Sentiment/default.svg'
import { Answer, Question } from '../../interfaces/text';
import getQuestion from '../../utils/getQuestion';
import getAnswer from '../../utils/getAnswer';

interface CalendarDateData {
  month: number,
  date: number | '',
  isCurrentMonth: boolean,
  isToday: boolean,
  question: Question | null,
  answer: Answer | null,
}

const repemotion = 'default' // 그날의 대표 감정에 따라서 바뀜

const Calendar = () => {
  const [data, setData] = React.useState<CalendarDateData[]>([])
  const [cellSize, setCellSize] = React.useState(0)

  const icons = {
    angry: <AngerSvg/>,
    anxiety : <AnxietySvg/>,
    happiness :<HappinessSvg/>,
    embarrassment : <EmbarrassmentSvg/>,
    injury : <InjurySvg/>,
    sadness : <SadnessSvg/>,
    default : <DefaultSvg/>
  }


  useEffect(() => {
    setCellSize((Dimensions.get('window').width - 72 - 6 * 4) / 7)
  })

  useEffect(() => {(async () => {
    // set date data from current month.
    const date = new Date()

    // get current month, day of the week of the first day of the month, and number of days in the month.
    const month = date.getMonth()
    const firstDay = new Date(date.getFullYear(), month, 1).getDay()
    const daysInMonth = new Date(date.getFullYear(), month + 1, 0).getDate()

    // set date data.
    const dateData: CalendarDateData[] = []
    for (let i = 0; i < 35; i++) {
      if (i < firstDay || i >= firstDay + daysInMonth) {
        
        dateData.push({
          month: month,
          date: '',
          isCurrentMonth: false,
          isToday: false,
          question: null,
          answer: null,
        })
      } else {

        console.log(`2022-${month + 1}-${(i - firstDay + 1).toString().padStart(2, '0')}`)
        const question = await getQuestion(
          'parent2@email.me',
          `2022-${month + 1}-${(i - firstDay + 1).toString().padStart(2, '0')}`
        )
        if (!question || (question && question.content.length === 0)) {
          console.error('No question data')
          dateData.push({
            month: month,
            date: i - firstDay + 1,
            isCurrentMonth: true,
            isToday: i - firstDay + 1 === date.getDate(),
            question: null,
            answer: null,
          })
          continue;
        }

        const answer = await getAnswer(question.id);
        dateData.push({
          month: month,
          date: i - firstDay + 1,
          isCurrentMonth: true,
          isToday: i - firstDay + 1 === date.getDate(),
          question,
          answer,
        })
      }
    }

    setData(dateData)
  })()}, [])

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable
            style={{
              // screen width / 7
              width: cellSize,
              height: cellSize,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: item.isToday ? '#FFB02E' : '#D9D9D9',
              opacity: item.isCurrentMonth ? 1 : 0.5,
              margin: 2,
            }}
            onPress={() => {
              if (item.date > new Date().getDate()) {
                Alert.alert('아직 지나지 않은 날짜입니다.');
                return;
              }
              if (item.isCurrentMonth) {
                Alert.alert(`${item.month}월 ${item.date}일\n${item.question?.content}\n${item.answer?.content}`);
                return;
              }
            }}
          >
            <Text
              style={{
                fontSize: 7,
                marginRight:20,
              }}
            >{item.date}</Text>
            {item.date ? icons[repemotion] : null}
          </Pressable>
        )}
        numColumns={7}
        keyExtractor={(item) => item.date.toString()}
      />
    </View>
  )
}

export default Calendar