import axios, { AxiosError } from 'axios';

// 커스텀 에러 로깅 함수
const logError = (error: any) => {
  console.error('API Error:', error);
};

const instance = axios.create({
  baseURL: 'https://api.example.com',
});

// 응답 인터셉터
instance.interceptors.response.use(
  (res) => {
    const { code } = res.data;
    if (code !== 0) {
      const errorMessage = `에러코드: ${code}, 메세지: ${res.data.msg}`;
      logError(errorMessage);
      throw new Error(res.data.msg);
    }
    return res;
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status, data } = error.response;
      const errorMessage = `HTTP ${status}: ${data || '정체불명오류'}`;
      logError(errorMessage);
    } else if (error.request) {
      logError('서버에서 응답X');
    } else {
      logError(`설정 문제: ${error.message}`);
    }

    throw error;
  },
);

export default instance;
