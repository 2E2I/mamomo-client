import create from 'zustand';
import persist from '../utils/persist';

const UserProfileStore = create(
  persist(
    {
      key: "User",
    },
    (set) => ({
      // 사용자 닉네임
      nickname: "",
      setNickname(nickname) {
        set(() => ({ nickname: nickname }));
      },

      // 사용자 성별
      sex: "",
      setSex(sex) {
        set(() => ({ sex: sex }));
      },

      // 사용자 생년월일
      birth: "",
      setBirth(birth) {
        set(() => ({ birth: birth }));
      },

      // 사용자 관심 기부 분야
      favTopics: [],
      setFavTopics(favTopics) {
        set(() => ({ favTopics: favTopics }));
      },
    }),
  ),
);

export { UserProfileStore };