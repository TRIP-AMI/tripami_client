import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useRecoilState, useSetRecoilState } from 'recoil';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { Octicons } from '@expo/vector-icons';
import SelectButton from '@/components/atoms/Button/SelectButton';
import Spacing from '@/styles/spacing';
import { pickerDateList } from '@/hooks/calendarHook';
import selectCalendarList from '@/utils/recoil/calendar';
import CalendarPicker from '@/components/molecules/Calendar/CalendarPicker';
import SectionDividerBar from '@/components/atoms/etc/SectionDividerBar';
import pickerSelectValue, { pickerList } from '@/utils/recoil/picker';
import useModalHook from '@/hooks/modalHook';

export default function CalendarScreen() {
  const { setModalName } = useModalHook();
  const [selectDateList, setSelectDateList] =
    useRecoilState(selectCalendarList);
  const setPickerList = useSetRecoilState(pickerList);
  const [pickerSelectDate, setPickerSelectDate] =
    useRecoilState(pickerSelectValue);

  useEffect(() => {
    const defaultTime = dayjs().startOf('M').format();
    setPickerSelectDate(defaultTime);
    setPickerList(pickerDateList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleModalOpen = () => {
    setModalName('PICKER_SELECT');
  };

  const deleteDate = (date: string) => {
    setSelectDateList((prev) =>
      prev.filter((selectDate) => dayjs(date).format() !== selectDate),
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
        {/* text */}
        <Text style={styles.infoText}>You can choose up to five dates.</Text>

        {/* select box */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <SelectButton
            title={dayjs(pickerSelectDate).format('MMMM / YYYY')}
            onPress={handleModalOpen}
          />
        </View>
        {/* calendar */}
        <CalendarPicker selectDate={pickerSelectDate} />
      </View>
      <SectionDividerBar style={{ marginVertical: 30 }} />
      <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
        {/* select list */}
        {selectDateList.map((date) => {
          return (
            <View
              key={dayjs(date).format()}
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Text style={styles.selectListText}>
                {dayjs(date).format('MMMM DD, YYYY')}
              </Text>
              <Pressable
                onPress={() => {
                  deleteDate(date);
                }}
              >
                <Octicons
                  name='x-circle-fill'
                  size={18}
                  color='#ccc'
                  style={{ marginLeft: 20 }}
                />
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  infoText: {
    marginVertical: 30,
    color: '#8E8E8E',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 22,
  },
  selectListText: {
    color: '#4A4A4A',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    lineHeight: 22,
  },
});
