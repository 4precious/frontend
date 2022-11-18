import { View, Text, FlatList, Dimensions, Pressable, Alert } from 'react-native'
import React, { useEffect } from 'react'

interface CalendarDateData {
  month: number,
  date: number | '',
  isCurrentMonth: boolean,
  isToday: boolean,
}

const Calendar = () => {
  const [data, setData] = React.useState<CalendarDateData[]>([])
  const [cellSize, setCellSize] = React.useState(0)

  useEffect(() => {
    setCellSize((Dimensions.get('window').width - 72 - 6 * 4) / 7)
  })

  useEffect(() => {
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
        })
      } else {
        dateData.push({
          month: month,
          date: i - firstDay + 1,
          isCurrentMonth: true,
          isToday: i - firstDay + 1 === date.getDate(),
        })
      }
    }

    setData(dateData)
  }, [])

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
                Alert.alert(`${item.month}월 ${item.date}일의 질문과 답변을 표시합니다.`)
                return;
              }
            }}
          >
            <Text
              style={{
                fontSize: 16,
              }}
            >{item.date}</Text>
          </Pressable>
        )}
        numColumns={7}
        keyExtractor={(item) => item.date.toString()}
      />
    </View>
  )
}

export default Calendar