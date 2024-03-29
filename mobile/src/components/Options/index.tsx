import React from 'react'
import { Text, View } from 'react-native'
import { feedbackTypes } from '../../utils/feedbackTypes'
import { Copyright } from '../Copyright'
import { Option } from '../Option'
import { FeedbackType } from '../Widget'
import { styles } from './styles'

interface IOptionsProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void
}

export function Options({ onFeedbackTypeChanged }: IOptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map((feedbackType) => {
          const [key, value] = feedbackType

          return <Option onPress={() => onFeedbackTypeChanged(key as FeedbackType)} key={key} title={value.title} image={value.image} />
        })}
      </View>

      <Copyright />
    </View>
  )
}
