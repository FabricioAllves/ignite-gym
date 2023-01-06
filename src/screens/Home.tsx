import { useState } from 'react'
import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { HStack, VStack, FlatList, Heading, Text } from 'native-base'

export function Home() {
  const [groups, setGroups] = useState(['costas', 'ombro', 'Bíceps', 'Triceps'])
  const [groupSelected, setGroupSelected] = useState('costas')

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActivity={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal

        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent='space-between' mb={5}>
          <Heading color='gray.200' fontSize='md'>
            Exercícios
          </Heading>

          <Text color='gray.200' fontSize='sl'>
            4
          </Text>
        </HStack>

      </VStack>
    </VStack>
  )
}