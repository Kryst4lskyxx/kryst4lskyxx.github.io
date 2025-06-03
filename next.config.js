/*
 * @Author: krYst4lskYxx 7381802+kryst4lskyxx@user.noreply.gitee.com
 * @Date: 2025-06-03 21:32:28
 * @LastEditors: krYst4lskYxx 7381802+kryst4lskyxx@user.noreply.gitee.com
 * @LastEditTime: 2025-06-03 21:47:22
 * @FilePath: /个人博客/next.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    basePath: process.env.NODE_ENV === 'production' ? '/个人博客' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/个人博客/' : '',
}

module.exports = nextConfig 