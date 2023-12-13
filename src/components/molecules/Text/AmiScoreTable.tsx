import { View, StyleSheet, Dimensions } from 'react-native';
import AmiScore from '@components/atoms/Text/AmiScore';
import Colors from '@styles/colors';
import Spacing from '@styles/spacing';
import VerticalLine from '@components/atoms/etc/VerticalLine';

type AmiScoreTableProps = {
  scores: {
    title: string;
    data: {
      id: number;
      score: number;
      title: string;
    }[];
  };
};

function AmiScoreTable({ scores }: AmiScoreTableProps) {
  return (
    <View style={styles.container}>
      {scores.data.map((item, index) => (
        <>
          <AmiScore
            key={scores.title + item.id.toString()}
            score={item.score}
            title={item.title}
          />
          {index !== scores.data.length - 1 && <VerticalLine />}
        </>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: Dimensions.get('window').height * 0.0845,
    borderRadius: 5,
    borderColor: Colors.lineGray,
    borderWidth: 1,
    marginHorizontal: Spacing.IOS392Margin,
    marginBottom: 20,
  },
});

export default AmiScoreTable;
