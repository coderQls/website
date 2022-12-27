import Mock from 'mockjs';

Mock.mock('/api/login', 'post', (req) => {
  const body = JSON.parse(req.body);
  console.log(typeof body);
  if (body.user === 'admin' && body.password === '123456') {
    return {
      code: 200,
      msg: '登录成功',
      data: { user: body.user, password: body.password },
    };
  }
  return {
    code: 400,
    msg: '账号或密码错误',
    data: null,
  };
});
