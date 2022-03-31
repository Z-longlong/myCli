#! /usr/bin/env node

const program = require('commander')
const create = require('../lib/create');
const figlet = require('figlet');
const chalk = require('chalk');

program
    // 定义命令和参数
    .command('create <app-name>')
    .description('create a new project')
    // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
    .option('-f, --force', 'overwrite target directory if it exist')
    .action((name, options) => {

        // 打印执行结果
        create(name, options);
    })

program
    // 配置版本号信息
    .version(`v${require('../package.json').version}`)
    .usage('<command> [option]');

program
    // 监听 --help 执行
    .on('--help', () => {
        // 使用 figlet 绘制 Logo
        console.log('\r\n' + figlet.textSync('welcome', {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }));
        // 新增说明信息
        console.log(`\r\nRun ${chalk.cyan(`roc <command> --help`)} show details\r\n`)
    })


// 解析用户执行命令传入参数
program.parse(process.argv);

