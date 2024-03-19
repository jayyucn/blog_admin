export const Toolbar = {
  mermaid: {
    text: '图表',
    icon: 'v-md-icon-mermaid',
    innerWidth: '100px',
    outerWidth: '100px',
    menus: {
      mode: 'panel',
      itemWidth: '100px',
      rowNum: 5,
      items: [
        {
          text: 'mermaid教程',
          action() {
            window.open('https://mermaid.nodejs.cn/ecosystem/tutorials.html', '_blank')
          }
        },
        {
          text: '流程图',
          action(editor) {
            editor.insert(function () {
              const prefix = '```mermaid\nflowchart TB\n'
              const content = `c1-->a2\nsubgraph one\na1-->a2\nend\nsubgraph two\nb1-->b2\nend\nsubgraph three\nc1-->c2\nend\none --> two\nthree --> two\ntwo --> c2`
              const end = '\n```'
              return {
                text: prefix + content + end,
                selected: content
              }
            })
          }
        },
        {
          text: '思维导图',
          action(editor) {
            editor.insert(function () {
              const prefix = '```mermaid\nmindmap\n'
              const content = `root((mindmap))\n  Origins\n    Long history\n    ::icon(fa fa-book)\n    Popularisation\n      British popular psychology author Tony Buzan\n  Research\n    On effectiveness<br/>and features\n    On Automatic creation\n      Uses\n          Creative techniques\n          Strategic planning\n          Argument mapping\n  Tools\n    Pen and paper\n    Mermaid`
              const end = '\n```'
              return {
                text: prefix + content + end,
                selected: content
              }
            })
          }
        },
        {
          text: '状态图',
          action(editor) {
            editor.insert(function () {
              const prefix = '```mermaid\n---\ntitle: Simple sample\n---\nstateDiagram-v2\n'
              const content = `    [*] --> Still\n    Still --> [*]\n\n    Still --> Moving\n    Moving --> Still\n    Moving --> Crash\n    Crash --> [*]`
              const end = '\n```'
              return {
                text: prefix + content + end,
                selected: content
              }
            })
          }
        },
        {
          text: '甘特图',
          action(editor) {
            editor.insert(function () {
              const prefix = '```mermaid\ngantt\n'
              const content = `\n    title A Gantt Diagram\n    dateFormat YYYY-MM-DD\n    section Section\n        A task          :a1, 2014-01-01, 30d\n        Another task    :after a1, 20d\n    section Another\n        Task in Another :2014-01-12, 12d\n        another task    :24d`
              const end = '\n```'
              return {
                text: prefix + content + end,
                selected: content
              }
            })
          }
        },
        {
          text: '象限图',
          action(editor) {
            editor.insert(function () {
              const prefix = '```mermaid\nquadrantChart\n'
              const content = `title Reach and engagement of campaigns\nx-axis Low Reach --> High Reach\ny-axis Low Engagement --> High Engagement\nquadrant-1 We should expand\nquadrant-2 Need to promote\nquadrant-3 Re-evaluate\nquadrant-4 May be improved\nCampaign A: [0.3, 0.6]\nCampaign B: [0.45, 0.23]\nCampaign C: [0.57, 0.69]\nCampaign D: [0.78, 0.34]\nCampaign E: [0.40, 0.34]\nCampaign F: [0.35, 0.78]`
              const end = '\n```'
              return {
                text: prefix + content + end,
                selected: content
              }
            })
          }
        },
        {
          text: '时间线图',
          action(editor) {
            editor.insert(function () {
              const prefix = '```mermaid\ntimeline\n'
              const content = `\n    title History of Social Media Platform\n    2002 : LinkedIn\n    2004 : Facebook\n         : Google\n    2005 : Youtube\n    2006 : Twitter`
              const end = '\n```'
              return {
                text: prefix + content + end,
                selected: content
              }
            })
          }
        },
        {
          text: '框图',
          action(editor) {
            editor.insert(function () {
              const prefix = '```mermaid\nblock-beta\n'
              const content = `columns 1\n  db(("DB"))\n  blockArrowId6<["&nbsp;&nbsp;&nbsp;"]>(down)\n  block:ID\n    A\n    B["A wide one in the middle"]\n    C\n  end\n  space\n  D\n  ID --> D\n  C --> D\n  style B fill:#969,stroke:#333,stroke-width:4px`
              const end = '\n```'
              return {
                text: prefix + content + end,
                selected: content
              }
            })
          }
        },
        {
          text: '柱状图',
          action(editor) {
            editor.insert(function () {
              const prefix = '```mermaid\nxychart-beta\n'
              const content = `\n    title "Sales Revenue"\n    x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]\n    y-axis "Revenue (in $)" 4000 --> 11000\n    bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]\n    line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]`
              const end = '\n```'
              return {
                text: prefix + content + end,
                selected: content
              }
            })
          }
        },
        {
          text: '折线图',
          action(editor) {
            editor.insert(function () {
              const prefix = '```mermaid\nmindmap\n'
              const content = `root((mindmap))\n  Origins\n    Long history\n    ::icon(fa fa-book)\n    Popularisation\n      British popular psychology author Tony Buzan\n  Research\n    On effectiveness<br/>and features\n    On Automatic creation\n      Uses\n          Creative techniques\n          Strategic planning\n          Argument mapping\n  Tools\n    Pen and paper\n    Mermaid`
              const end = '\n```'
              return {
                text: prefix + content + end,
                selected: content
              }
            })
          }
        }
      ]
    }
  },
  tips: {
    title: '插入提示',
    icon: 'v-md-icon-tips',
    menus: [
      {
        text: '提示',
        action(editor) {
          editor.insert(function () {
            const prefix = '::: tip 提示\n'
            const content = `tip here..`
            const end = '\n:::'
            return {
              text: prefix + content + end,
              selected: content
            }
          })
        }
      },
      {
        text: '警告',
        action(editor) {
          editor.insert(function () {
            const prefix = '::: danger 警告\n'
            const content = `tip here..`
            const end = '\n:::'
            return {
              text: prefix + content + end,
              selected: content
            }
          })
        }
      },
      {
        text: '详细信息',
        action(editor) {
          editor.insert(function () {
            const prefix = '::: details 详情\n'
            const content = `tip here..`
            const end = '\n:::'
            return {
              text: prefix + content + end,
              selected: content
            }
          })
        }
      },
      {
        text: '注意',
        action(editor) {
          editor.insert(function () {
            const prefix = '::: warning 注意\n'
            const content = `tip here..`
            const end = '\n:::'
            return {
              text: prefix + content + end,
              selected: content
            }
          })
        }
      }
    ]
  }
}
