import request from '@/utils/request'

export const appointment = {
  /*
  @name            getHospInfo 
  @desc            获取院区列表
  @params        
  @return        
  */
  getHospInfo() {
    return request({
      url: '/api/v1/appointment/getHospInfo',
    })
  },
  /*
    @name           getDeptList
    @desc           获取预约科室列表
    @params         
                    orgId: "xxxxxxxx"//机构id
    @return        
    */
  getDeptList(orgId) {
    return request({
      url: '/api/v1/appointment/getDeptList',
      method: 'get',
      params: { orgId },
    })
  },
  /*
    @name           getDeptByCondition
    @desc           根据条件查询科室
    @params         
                    name: "xxxxxxxx"//医生名字或者科室名称
                    orgId:"xxx"//机构id
    @return        
    */
  getDeptByCondition(params) {
    return request({
      url: '/api/v1/appointment/getDeptByCondition',
      method: 'get',
      params,
    })
  },
  /*
  @name           getReverseDeptDate
  @desc           获取预约科室可预约日期
  @params        
                  deptId: "xxxxxxxx"//科室id
                  orgId:"xxx"//机构id
  @return         
  */
  getReverseDeptDate(params) {
    return request({
      url: '/api/v1/appointment/getReverseDeptDate',
      method: 'get',
      params,
    })
  },
  /*
  @name           getDoctorList
  @desc           根据科室获取医生列表 pc端
  @params        
                  orgId: "xxxxxxxx"//机构id
                  deptId: "xxxxxxxx"//科室id
  @return        
  */
  getDoctorList(params) {
    return request({
      url: '/api/v1/appointment/getDoctorList',
      method: 'get',
      params,
    })
  },
  /*
  @name           getReverseDocInfo
  @desc           获取预约医生信息
  @params         
                  deptId: "xxxxxxxx"//科室id
                  orgId:"xxx"//机构id
                  doctorId:"xxx"//医生id（不是必填）
                  beginDate：//预约开始时间" 
                  endDate：//预约结束时间"
                  resource:""//来源1-web 2-小程序
  @return         
  */
  getReverseDocInfo(params) {
    return request({
      url: '/api/v1/appointment/getReverseDocInfo',
      method: 'get',
      params,
    })
  },
  /*
  @name           refreshDoctorNo
  @desc           刷新医生号源
  @params         
                  orgId: "xxxxxxxx"//机构id
                  deptId: "xxxxxxxx"//科室id
                  doctorId: "xxxxxxxx"//医生id
                  regDate: "xxxxxxxx"//预约时间
  @return         
  */
  refreshDoctorNo(params) {
    return request({
      url: '/api/v1/appointment/refreshDoctorNo',
      method: 'get',
      params,
    })
  },
  /*
    @name           save
    @desc           保存诊间预约信息
    @params        
                    {
                        deptId: "xxxxxxxx"//科室id
                        orgId:"xxx"//机构id
                        doctorId:"xxx"//医生id
                        memberId:"xxx"//成员id
                        userId:"xxx"//用户id
                        diagnoseNo:"xxx"//就诊号
                        resourceNo:"xxx"//号源类型
                        startTime:"xxx"//预约开始日期
                        endTime:"xxx"//预约结束日期
                        fee:"xxx"//诊疗费用
                        creator:"xxx"//创建人id
                    }
    @return        
    */
  save(data) {
    return request({
      url: '/api/v1/appointment/save',
      method: 'post',
      data: data,
    })
  },
}
