import { HStack } from '@/components/ui/hstack';
import { Image, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <HStack className='justify-between'>
        <Text className='text-2xl font-bold'>Home</Text>
        <Text className='text-2xl font-bold'>Test</Text>
      </HStack>
    </SafeAreaView>
  );
}
