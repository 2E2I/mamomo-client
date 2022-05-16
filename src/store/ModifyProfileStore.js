import create from 'zustand';

// 프로필 수정
const ModifyProfileStore = create((set) => ({
  
  // 프로필 이미지
  mImg: "",
  setMImg(mImg) {
    set(() => ({ mImg: mImg }));
  },

  // 프로필 이미지 url
  mImgURL: "",
  setMImgURL(mImgURL) {
    set(() => ({ mImgURL: mImgURL }));
  },

  // 닉네임
  mNickname: "",
  setMNickname(mNickname) {
    set(() => ({ mNickname: mNickname }));
  },

  // 성별
  mSex: "",
  setMSex(mSex) {
    set(() => ({ mSex: mSex }));
  },

  // 생년월일
  mBirthday: "",
  setMBirthday(mBirthday) {
    set(() => ({ mBirthday: mBirthday }));
  },

  // 관심 기부 분야
  mFavTopics: "",
  setMFavTopics(mFavTopics) {
    set(() => ({ mFavTopics: mFavTopics }));
  },
}));

export { ModifyProfileStore };