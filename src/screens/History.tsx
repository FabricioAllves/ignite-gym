import { useState } from 'react'
import { VStack, Text, Heading, SectionList } from 'native-base'

import { ScreenHeader } from '@components/ScreenHeader'
import { HistoryCard } from '@components/HistoryCard'

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "05.01.2023",
      data: ["Puxada frontal", "Remada unilateral"]
    },
    {
      title: "06.01.2023",
      data: ["Puxada frontal"]
    },
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title="Historico de Exercícios" />

      <SectionList px={8}
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section }) => (
          <Heading color='gray.200' fontSize='md' mt={10} mb={3}>
            {section.title}
          </Heading>
        )}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text color='gray.100' textAlign='center'>
            Não há exercícios registrados ainda.{'\n'}
            Vamos fazer exercícios hoje?
          </Text>
        )}
      />

    </VStack>
  )
}