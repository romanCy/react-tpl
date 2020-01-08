import Mock from 'mockjs';
import user from './user';

const mockDatas = [...user];

export default mockDatas.map(item => {
  Mock.mock(item.url, item.method, item.data);
});
