import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from '../Home/Icon'
import { CLOSE } from '../../constant'
import tw from '../../tailwind'
import { CreatePostHeaderProps } from '../../types'

const Header: React.FC<CreatePostHeaderProps> = ({ navigation, addPostOnPress }) => {
  return (
    <View style={tw`flex-row w-full justify-between p-3 items-center absolute z-1`}>
      <Icon
        urlSource={CLOSE}
        navigation={navigation}
        style='bg-black rounded-full'
        onPress={() => navigation.goBack()}
      />
      <TouchableOpacity onPress={addPostOnPress}>
        <Text style={tw`text-white bg-black px-4 py-2 rounded-lg font-bold text-base`}>
          Upload
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header