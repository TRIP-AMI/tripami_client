import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import joinAuthApi from '@services/module/join/join';
import {
  EmailAuthProps,
  RootStackNavigationProp,
} from '@/types/NavigationTypes';
import { IJoinAuthInputs } from '@/types/FormTypes';
import instance, { BASE_API_URL } from '@/services/config/axios';
import showToast from '@/utils/toast/toast';
import useModalHook from './modalHook';

const useAuthForm = ({
  mode,
  params,
}: {
  mode: 'JOIN' | 'FIND_PW';
  params?: EmailAuthProps;
}) => {
  const TITLE =
    mode === 'JOIN'
      ? 'Please enter your email'
      : `Please enter your email\nyou signed up for membership.`;

  const { navigate } = useNavigation<RootStackNavigationProp>();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [title, setTitle] = useState(TITLE);
  const { setModalName } = useModalHook();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IJoinAuthInputs>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      authCode: '',
    },
  });

  // TODO: 이메일 인증 요청, 에러 처리
  const onConfirmEmail = async (data: IJoinAuthInputs) => {
    if (errors.email) return;
    try {
      await instance.post(`${BASE_API_URL}/email`, { email: data.email });
      setIsEmailSent(true);
      setTitle(`To the email you entered\nAuthentication number has been sent`);
    } catch (e) {
      if (mode === 'JOIN') showToast('This account is already registered.');
      else if (mode === 'FIND_PW') setModalName('AUTH_ALERT');
      setIsEmailSent(false);
      setTitle(TITLE);
    }
  };

  // TODO: 인증 코드 확인 요청, 에러 처리
  const onCheckAuthCode = async (data: IJoinAuthInputs) => {
    if (errors.authCode) return;
    try {
      if (mode === 'JOIN') {
        await joinAuthApi.checkAuthCode(data.authCode);
        console.log(
          `auth success (email: ${data.email}, marketing agree: ${params?.optionalChecked})`,
        );
        navigate('CreateName', { email: data.email });
      } else if (mode === 'FIND_PW') {
        navigate('ResetPassword', { mode: 'RESET', email: data.email });
      }
    } catch (e) {
      setError('authCode', {
        message: 'The authentication number is invalid.',
      });
    }
  };

  return {
    isEmailSent,
    title,
    control,
    errors,
    handleSubmit,
    onConfirmEmail,
    onCheckAuthCode,
  };
};

export default useAuthForm;
