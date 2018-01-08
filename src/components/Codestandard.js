import React from 'react'
import ReactMarkdown from 'react-markdown'
class Codestandard extends React.Component{
  render() {
    let source = `
*Api.php*
* 源代码:
\`\`\`
<?php
/**
 * PHP文件编码规范说明, 支持标准phpcs 检测过 PSR2规范.
 *
 * 文件的说明，todo
 *
 * PHP version 5
 *
 * @category PHP
 * @package  Arphp_Api_todo
 * @author   你的名字作者todo <你的邮箱，必须这个格式@gmail.com>
 * @license  http://www.arphp.org/licence ar licence 5.1
 * @version  GIT: 0103
 * @link     http://www.arphp.org
 */
namespace ori\ctl\main;

use \ar\core\ApiController as Controller;

/**
 * 类名字，干什么的必须写清楚，下面的每个字段都是必须的 todo
 *
 * @category  PHP
 * @package   Arphp_Api
 * @author    ycassnr <ycassnr@gmail.com>
 * @author    Another Author <another@example.com>
 * @copyright 1997-2005 The PHP Group
 * @license   http://www.arphp.org/licence ar licence 5.1
 * @version   Release: @package_version@
 * @link      http://www.arphp.org
 */
class Api extends Controller
{
    /**
     * 初始化方法
     *
     * @return void
     */
    public function init()
    {
        // $this->request 请求参数数组， 控制器任意地方可调用
        // var_dump($this->request);
        header('Access-Control-Allow-Origin:*');
    }

    /**
     * 函数的写法规范(多参数)todo
     *
     * <pre>
     *    具体的用法, 用pre包裹
     *    api.fetch(url, {dname: "dname1", dname2: "dname2", dname3: "dname3"})
     *    .then(json => (dosomething(json)))
     * </pre>
     *
     * @param string $dname  参数1,todo,这个必须要和下面定义的一致
     * @param int    $dname2 文档名称2
     * @param string $dname3 文档名称3
     *
     * @author 你的名字必填 <ycassnr@gmail.com>
     * @author another user <ycassnr@gmail.com>
     *
     * @apiname 项目开发首页1, 项目说明todo, 这个必填,标明平台对应的任务名词
     *
     * @return void
    */
    public function docprametest($dname, int $dname2, $dname3 = 'd3')
    {
        $info = $this->getAnnotationService()->parse(__FILE__)->getInformation();
        $comments = $this->getTransService()->convert($info);
        $this->showJson($comments);

    }

    /**
     * Just for test, 没有参数的接口写法
     *
     * @author tester <tester@coopcoder.com>
     *
     * @apiname 测试方法
     *
     * @return void
     */
    public function tapi()
    {
        echo 'test api';

    }
}
\`\`\`

`
    return (
      <ReactMarkdown className="markdown-body" source={source} />
    )
  }
}
export default Codestandard
