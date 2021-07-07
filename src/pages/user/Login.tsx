import React from "react"
import { message } from "antd"
import { inject, observer } from "mobx-react"
import ProForm, { ProFormText, ProFormCaptcha } from "@ant-design/pro-form"
import { MobileOutlined, MailOutlined } from "@ant-design/icons"
import type { IRouteComponentProps } from "@/layouts/RouteView"

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

const Login = (props: IRouteComponentProps) => {
  const { store, history } = props
  return (
    <div
      style={{
        width: 330,
        margin: "auto"
      }}
    >
      <ProForm
        onFinish={async () => {
          // await waitTime(2000)
          // store.isAuthenticated = true
          store.changeAuthenticated(true)
          message.success("提交成功")
          history.replace("/")
        }}
        submitter={{
          searchConfig: {
            submitText: "登录"
          },
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            size: "large",
            style: {
              width: "100%"
            }
          }
        }}
      >
        <h1
          style={{
            textAlign: "center"
          }}
        >
          <img
            style={{
              height: "44px",
              marginRight: 16
            }}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
          Ant Design
        </h1>
        <div
          style={{
            marginTop: 12,
            textAlign: "center",
            marginBottom: 40
          }}
        >
          Ant Design 是西湖区最具影响力的 Web 设计规范
        </div>
        <ProFormText
          fieldProps={{
            size: "large",
            prefix: <MobileOutlined />
          }}
          name="phone"
          placeholder="请输入手机号"
          rules={[
            {
              required: true,
              message: "请输入手机号!"
            },
            {
              pattern: /^1\d{10}$/,
              message: "不合法的手机号格式!"
            }
          ]}
        />
        <ProFormCaptcha
          fieldProps={{
            size: "large",
            prefix: <MailOutlined />
          }}
          captchaProps={{
            size: "large"
          }}
          phoneName="phone"
          name="captcha"
          rules={[
            {
              required: true,
              message: "请输入验证码"
            }
          ]}
          placeholder="请输入验证码"
          onGetCaptcha={async (phone) => {
            await waitTime(1000)
            message.success(`手机号 ${phone} 验证码发送成功!`)
          }}
        />
      </ProForm>
    </div>
  )
}
export default inject("store")(observer(Login))
