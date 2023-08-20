import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/solid";
import NavIcon from "../../assets/nav_icon.webp";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex flex-col">
      <View className="px-3 pt-1 pb-2 flex flex-col ">
        <View className="flex flex-row gap-2 items-center">
          <View className="bg-slate-300 p-2 rounded-full w-10 h-10 flex justify-center items-center">
            <Image source={NavIcon} className="w-full h-full" />
          </View>

          <View className="flex-1">
            <Text className="text-xs text-gray-500 leading-3 ">
              Deliver Now!
            </Text>
            <View className="flex flex-row items-center">
              <Text className="text-xl font-bold">Current Location</Text>
              <ChevronDownIcon size={20} />
            </View>
          </View>
          <View>
            <UserIcon size={35} />
          </View>
        </View>
        <View className="flex flex-row mt-4 items-center">
          <View className="flex-1 flex flex-row bg-slate-200 px-2 py-3">
            <MagnifyingGlassIcon size={15} />
            <TextInput
              placeholder="Search restaurant, cuisines..."
              keyboardType="default"
              className="ml-2"
            />
          </View>
          <View className="ml-2">
            <AdjustmentsHorizontalIcon size={25} />
          </View>
        </View>
      </View>

      <ScrollView className="bg-gray-100 pt-3 px-3">
        {/* Categories */}
        <Categories />

        {/* Featured Row */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
