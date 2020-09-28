
import { getUserInfo, followingUser, unfollowingUser, listfollowingUser, listfollower } from "network/user";
import { getPostDetail } from 'network/post'

export default {
  async listfollowingUser(context) {
    // 向服务器要关注的用户列表
    const result = await listfollowingUser(context.state.user._id);
    const followingUsers = result.data.following
    // 触发mutations更改state
    context.commit('receive_following_user', followingUsers)
  },


  //////////// 粉丝经济

  // 用户关注用户
  // 关注成功更新粉丝列表
  async followingUser(context, id) {
    // 关注当前用户
    const res = await followingUser(id)
    if (res.status === 401) {
      console.log("关注失败，刷新页面");
      return;
    }
    // TODO 将关注的用户添加到state上
    console.log("关注成功，刷新页面");
    // 更新作者粉丝列表
    // 向服务器要关注的用户列表
    const result = await listfollower(id);
    const followers = result.data.followers
    // 触发mutations更改state
    // console.log(result, '33333333333333333333333')
    context.commit('receive_author_following_user', followers)
    /////////////////////////////////
    ///////////////////////let user = [1,11,1,1,]
    /////////////////////////////////////////////////
    // context.commit('receive_author_following_user', id)

  },

  // 用户取消关注
  // 取消关注成功更新粉丝列表
  async unfollowingUser(context, id) {
    const res = await unfollowingUser(id)
    if (res.status === 401) {
      console.log("取消关注失败，刷新页面");
      return;
    }
    // TODO 将取消关注的用户移除state
    console.log("取消关注成功，刷新页面");
     // 更新作者粉丝列表
    // 向服务器要关注的用户列表
    const result = await listfollower(id);
    const followers = result.data.followers
    // 触发mutations更改state
    // console.log(result, '33333333333333333333333')
    context.commit('receive_author_following_user', followers)
  },


  // 获取文章信息
  async getPostDetail(context, id) {
    const res = await getPostDetail(id)
    const post = res.data.post
    const author = post.author
    console.log(res, 'vuexxxxxxxxxxxxxxxxxxxxxxxxx')
    // 更新文章信息
    context.commit('set_post', post)
    // 更新作者信息
    context.commit('set_author', author)
  },
  // (this.$route.params.id).then((res) => {
  //   this.post = res;
  //   this.author = res.author;
  //   console.log(this.post);
  // });

  // 获取作者信息，通过url获取id
  async getAuthorInfo(context, id) {
    const res = await getUserInfo(id)
    console.log(res, 'vuexxxxxxxxxxxxxxxxxxxxx')
    this.commit('set_author', res.data.user)
  },

  // 获取作者粉丝列表
  async listAuthorFollowingUser(context, id) {
    // 向服务器要关注的用户列表
    const result = await listfollower(id);
    const followers = result.data.followers
    // 触发mutations更改state
    console.log(result, '33333333333333333333333')
    context.commit('receive_author_following_user', followers)
  },
  

}