import create from 'zustand';

// 프로필 수정
const ModifyProfileStore = create((set) => ({
  mNickname: "",
  setMNickname(mNickname) {
    set(() => ({ mNickname: mNickname }));
  },

  mSex: "",
  setMSex(mSex) {
    set(() => ({ mSex: mSex }));
  },

  mBirthday: "",
  setMBirthday(mBirthday) {
    set(() => ({ mBirthday: mBirthday }));
  },

  mFavTopics: "",
  setMFavTopics(mFavTopics) {
    set(() => ({ mFavTopics: mFavTopics }));
  },
}));

export { ModifyProfileStore };