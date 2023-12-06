import { StyleSheet, View } from 'react-native';
import { Dispatch, SetStateAction } from 'react';
import SelectedOptionCard from '@/components/atoms/Card/SelectedOptionCard';
import ApplyModalButton from '@/components/molecules/Modal/ApplyModalButton';

export default function ApplyModalContent({
  selectedDate,
  setSelectedDate,
  // originalPrice,
  price,
  // setPrice,
  onApply,
}: {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
  // originalPrice: number;
  price: number;
  // setPrice: Dispatch<SetStateAction<number>>;
  onApply: () => void;
}) {
  return (
    <>
      <View style={styles.container}>
        {selectedDate && (
          <SelectedOptionCard
            selectedItem={selectedDate}
            setSelectedItem={setSelectedDate}
            price={price}
            // originalPrice={originalPrice}
            // setPrice={setPrice}
          />
        )}
      </View>
      <ApplyModalButton price={price} onApply={onApply} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
    width: '100%',
    alignItems: 'center',
  },
});
