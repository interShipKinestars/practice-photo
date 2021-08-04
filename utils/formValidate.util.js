
export const checkRequired = (value = '') => {
  let alert;

  if (!value || !value.trim()) {
    alert = 'Thông tin bắt buộc nhập';
  };

  return alert;
};


export const isVietnamPhoneNumberValidator = (number = '') => {
  return /((?=(84)+([0-9]{9}))((84)+[0-9]{9})|((?=(840)+([0-9]{9}))((840)+[0-9]{9})|(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})))\b/.test(number);
};

export const ValidaterPassword = (new_password = '') => {
  //only required one alpha, one numeric!
  var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  if (new_password) {
    if (!mediumRegex.test(new_password)) {
      return false;
    }else{
      return true
    }
  }
  return false;
}

export const ValidaterEmail = (email = '') => {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email)) {
    return false;
  } else {
    return true;
  }
}