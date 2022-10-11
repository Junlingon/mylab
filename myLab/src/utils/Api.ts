import { request } from './http';

class Service {
    //登录
    static async login(data: any) {
        return request('/login/login', data)
    }

    //退出登录
    static async logout(data: any) {
        return request('/login/logout', data)
    }


    //获取用户账号列表
    static async UserList(data: any) {
        return request('/student/search', data)
    }

    //获取用户账号详情
    static async UserDetails(data: any) {
        return request('/student/searchOne', data)
    }
    //权限
    static async UserPermission(data: any) {
        return request('permission/search', data)
    }

    //冻结用户
    static async DelUser(data: any) {
        return request('usermanage/frozeUser', data)
    }


    //解除冻结用户账号密码
    static async NoDelUser(data: any) {
        return request('usermanage/unFrozeUser', data)
    }
    //用户菜单
    static async UserMenu(data: any) {
        return request('menus/search', data)
    }
    //实验室详情
    static async laborList(data: any) {
        return request('labor/search', data)
    }
    //实验室发展方向
    static async DevelopmentList(data: any) {
        return request('development/search', data)
    }
    //教师信息
    static async AdviserList(data: any) {
        return request('adviser/search', data)
    }
    //获取教师账号详情
    static async TeacherDetails(data: any) {
        return request('/adviser/searchOne', data)
    }
    //元素
    static async elementSearch(data: any) {
        return request('element/search', data)
    }
    //智能车
    static async CarSearch(data: any) {
        return request('car/search', data)
    }
    //智能车队
    static async FleetList(data: any) {
        return request('fleet/search', data)
    }
    //赛道图
    static async mapList(data: any) {
        return request('chart/search', data)
    }
    //绘制
    static async drawList(data: any) {
        return request('fleet/search', data)
    }
    //轨迹
    static async trackList(data: any) {
        return request('track/search', data)
    }
    //竞赛信息
    static async infoList(data: any) {
        return request('competition/search', data)
    }
    //日志管理
    static async LogList(data: any) {
        return request('/log/search', data)
    }
    //配置
    static async configList(data: any) {
        return request('/config/search', data)
    }
    //配置
    static async configAdd(data: any) {
        return request('/config/save', data)
    }
    //配置
    static async configUpdate(data: any) {
        return request('/config/update', data)
    }
    //站内信息
    static async messageList(data: any) {
        return request('/message/search', data)
    }

    //管理员账号列表
    static async AdminList(data: any) {
        return request('/user/search', data)
    }

    //管理员账号新建
    static async AdminAdd(data: any) {
        return request('adminlogin/register', data)
    }

    //管理员账号修改
    static async AdminUpd(data: any) {
        return request('user/update', data)
    }

    //管理员账号详情
    static async AdminDetails(data: any) {
        return request('user/searchOne', data)
    }

    //重置管理员账号密码
    static async creatpwd(data: any) {
        return request('user/resetPassword', data)
    }

    //冻结管理员账号密码
    static async DelAdmin(data: any) {
        return request('user/frozeUser', data)
    }

    //解除冻结管理员账号密码
    static async NoDelAdmin(data: any) {
        return request('user/unFrozeUser', data)
    }

    //获取权限无分页列表
    static async nopagerauthlist(data: any) {
        return request('role/roleNames', data)
    }
    //项目列表
    static async projectSearch(data: any) {
        return request('project/search', data)
    }
    //项目详情
    static async projectSearchone(data: any) {
        return request('project/searchOne', data)
    }
    //项目新增
    static async projectSave(data: any) {
        return request('project/save', data)
    }
    //项目删除
    static async projectDdelte(data: any) {
        return request('project/delteByIds', data)
    }
    //角色列表
    static async rolesearch(data: any) {
        return request('role/search', data)
    }

    //角色新建
    static async rolesave(data: any) {
        return request('role/save', data)
    }

    //角色修改
    static async roleupdate(data: any) {
        return request('role/update', data)
    }
    //角色删除
    static async roledelte(data: any) {
        return request('role/delteByIds', data)
    }

    //角色详情
    static async roleDetails(data: any) {
        return request('role/searchOne', data)
    }

    //管理员 权限列表
    static async RoleList(data: any) {
        return request('/role/search', data)
    }


    //常见问题列表
    static async FaqList(data: any) {
        return request('faq/search', data)
    }

    //常见问题详情
    static async FaqDetails(data: any) {
        return request('faq/searchOne', data)
    }

    //常见问题删除
    static async DelFaq(data: any) {
        return request('faq/delteByIds', data)
    }

    //常见问题修改
    static async UpdFaq(data: any) {
        return request('faq/update', data)
    }

    //常见问题新增
    static async AddFaq(data: any) {
        return request('faq/save', data)
    }


    //公告列表
    static async NoticeList(data: any) {
        return request('notice/search', data)
    }

    //公告详情
    static async NoticeDetails(data: any) {
        return request('notice/searchOne', data)
    }

    //公告修改
    static async UpdNotice(data: any) {
        return request('notice/update', data)
    }

    //公告删除
    static async DelNotice(data: any) {
        return request('notice/delteByIds', data)
    }

    //公告新增
    static async AddNotice(data: any) {
        return request('notice/save', data)
    }

    //组织列表
    static async Orglist(data: any) {
        return request('groupmanage/search', data)
    }

    //组织详情
    static async OrgDetails(data: any) {
        return request('groupmanage/searchOne', data)
    }

    //组织下人员
    static async OrgUserList(data: any) {
        return request('groupmanage/searchDepatment', data)
    }

    //解除冻结组织账号密码
    static async NoDelOrg(data: any) {
        return request('groupmanage/unFrozeGroup', data)
    }

    //冻结组织
    static async DelOrg(data: any) {
        return request('groupmanage/frozeGroup', data)
    }

    //获取消息列表
    static async MessageList(data: any) {
        return request('message/search', data)
    }

    //消息详情
    static async MessageDetails(data: any) {
        return request('message/searchOne', data)
    }

    //消息新增
    static async AddMessage(data: any) {
        return request('message/save', data)
    }

    //消息修改
    static async UpdMessage(data: any) {
        return request('message/update', data)
    }

    //消息发送 全体
    static async MessagePsotAll(data: any) {
        return request('message/postAll', data)
    }


    //消息发送单人
    static async MessagePsot(data: any) {
        return request('message/post', data)
    }

    //删除消息
    static async DelMessage(data: any) {
        return request('message/delteByIds', data)
    }


    //审核管理 用户审核列表
    static async AuditUserList(data: any) {
        return request('userVerfity/search', data)
    }

    //审核管理 用户审核详情
    static async AuditUserDetails(data: any) {
        return request('userVerfity/verifyDetails', data)
    }

    //审核管理 用户审核 通过
    static async AuditUserY(data: any) {
        return request('userVerfity/verify', data)
    }

    //审核管理 用户审核 拒绝
    static async AuditUserN(data: any) {
        return request('userVerfity/unverify', data)
    }



    //审核管理 组织审核列表
    static async AuditOrgList(data: any) {
        return request('groupVerfity/search', data)
    }

    //审核管理 组织审核详情
    static async AuditOrgDetails(data: any) {
        return request('groupVerfity/verifyDetails', data)
    }


    //审核管理 组织审核 通过
    static async AuditOrgY(data: any) {
        return request('groupVerfity/verify', data)
    }

    //审核管理 组织审核 拒绝
    static async AuditOrgN(data: any) {
        return request('groupVerfity/unVerify', data)
    }



}

export default {
    Service
}


