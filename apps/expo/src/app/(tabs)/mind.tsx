import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const suggestList: {
  id: number;
  name: string;
  image: unknown;
  time: number;
  heart: number;
  date: string;
  description: string;
}[] = [
  {
    id: 1,
    name: "Thiền về tình yêu",
    image: require("assets/images/mind/Rectangle_1245.png"),
    time: 21,
    heart: 22,
    date: "11.02.2023",
    description:
      " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
  },
  {
    id: 2,
    name: "Thiền về tâm hồn",
    image: require("assets/images/mind/Rectangle_1245.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
    description:
      " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
  },
  {
    id: 3,
    name: "Thiền về cuộc sống",
    image: require("assets/images/mind/Rectangle_1245.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
    description:
      " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
  },
  {
    id: 4,
    name: "Thiền về tình yêu",
    image: require("assets/images/mind/Rectangle_1245.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
    description:
      " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
  },
  {
    id: 5,
    name: "Thiền về tình yêu",
    image: require("assets/images/mind/Rectangle_1245.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
    description:
      " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
  },
  {
    id: 6,
    name: "Thiền về tình yêu",
    image: require("assets/images/mind/Rectangle_1245.png"),
    time: 21,
    heart: 2,
    date: "11.02.2023",
    description:
      " Bài thiền sẽ giúp bạn mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần, giúp bạn giải tỏa căng thẳng, làm dịu cơn đau, cải thiện các vấn đề về tim và huyết áp bạn sẽ biết cách xoa dịu, điều tiết nguồn khí trong cơ thể nhằm giảm bớt nhiều vấn đề sức khỏe, từ đó giúp bạn giải tỏa căng thẳng, lo lắng, mang lại lợi ích tuyệt vời cho sức khỏe thể chất lẫn tinh thần. Ngoài ra, còn giúp bạn giữ trạng thái cân bằng trong cơ thể, giúp bạn làm chủ bản thân trong các tình huống.",
  },
];

const suggests = [
  {
    name: "Gợi ý",
    list: suggestList,
  },
  {
    name: "Thiền",
    list: suggestList,
  },
  {
    name: "Mind lessons",
    list: suggestList,
  },
  {
    name: "Q & A",
    list: suggestList,
  },
  {
    name: "Tâm trí",
    list: suggestList,
  },
  {
    name: "Healing",
    list: suggestList,
  },
];
const Mind = () => {
  return (
    <SafeAreaView>
      <Text>Mind</Text>
    </SafeAreaView>
  );
};

export default Mind;
