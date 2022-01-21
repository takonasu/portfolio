<template>
  <section class="section">
    <div class="is-mobile">
      <b-dropdown v-model="viewYear" aria-role="list">
        <button slot="trigger" class="button is-primary">
          <span>{{ viewYear == 'all' ? '全て' : viewYear + '年' }}</span>
          <b-icon icon="menu-down" />
        </button>
        <b-dropdown-item value="all" aria-role="listitem">
          全て
        </b-dropdown-item>
        <b-dropdown-item value="2020" aria-role="listitem">
          2020年
        </b-dropdown-item>
        <b-dropdown-item value="2019" aria-role="listitem">
          2019年
        </b-dropdown-item>
        <b-dropdown-item value="2018" aria-role="listitem">
          2018年
        </b-dropdown-item>
        <b-dropdown-item value="2017" aria-role="listitem">
          2017年
        </b-dropdown-item>
        <b-dropdown-item value="2016" aria-role="listitem">
          2016年
        </b-dropdown-item>
      </b-dropdown>
      <div class="columns is-multiline">
        <div
          v-for="(article, key) of filterArticleByYear"
          :key="key"
          class="column is-half"
        >
          <card
            :year="article.year"
            :title="article.title"
            :picture="article.picture"
            :description="article.description"
            :view-year="viewYear"
            :tags="article.tag"
          >
            <div v-if="article.link !== ''">
              <a :href="article.link" target="_blank">
                <b-button type="is-primary">リンク</b-button>
              </a>
            </div>
            <div v-else>
              <b-button type="is-primary" inverted>
                リンク
              </b-button>
            </div>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  },
  data() {
    return {
      articles: [
        {
          title: 'AG_Station',
          year: '2021',
          picture: require('~/assets/images/AGStation1.jpg'),
          link: 'https://github.com/takonasu/AG_Station',
          description:
            '超A&Gの予約録画等を行えるツール．自宅サーバー等に配置でき，WEB上から予約ができる．',
          tag: ['Node.js', 'Express.js', 'Nuxt.js', 'Docker']
        },
        {
          title: 'MITSUCO',
          year: '2020',
          picture: require('~/assets/images/MITSUKO.png'),
          link: 'https://www.nicovideo.jp/watch/sm38227309',
          description:
            '友人2人で共同制作。回路を担当。COCOAの信号を検知し、無意識に密になっていた場合に警告してくれるデバイス。',
          tag: ['AVRマイコン']
        },
        {
          title: 'スライドぶっこ抜きマン',
          year: '2020',
          picture: require('~/assets/images/bukkonuki.png'),
          link: 'https://github.com/takonasu/SlideBukkonuki',
          description:
            'オンライン授業でスライドを配布しないのに授業動画内でスライドを表示している先生が多いため、動画から自動的にスライドを切り抜いてくれるソフトを作成。スライドが切り替わったときのみ切り抜かれる。自分用に作ったが案外需要があったために公開',
          tag: ['OpenCV', 'C++']
        },
        {
          title: 'Twin:te Project',
          year: '2020',
          picture: 'https://www.twinte.net/ogp.jpg',
          link: 'https://www.twinte.net',
          description:
            '新メンバーを加えてリニューアル。主に4人で共同開発。インフラ・iOSアプリ担当。しかしアプリのほとんどはWebViewである。ウィジェット機能を有し、曜日振替に対応した今日の時間割が表示される。OSSなので長くメンテナンスされることを期待している。将来的には時間割アプリ以外の機能も追加する予定。',
          tag: ['Swift', 'Ubuntu']
        },
        {
          title: 'WEB版デンモク',
          year: '2019',
          picture: require('~/assets/images/WEBdenmoku2.jpg'),
          link: 'https://webdenmoku.herokuapp.com/',
          description:
            '2018年に書いたWEBデンモクをLaravelで書き換えたもの。 曲を送信時にキーを選択したりと機能性・操作性等が向上した。しかしDAMと接続するのが非常にめんどくさく、リモコンのデザインは完全に諦めた。 気が向いたらデザインとDAMとの接続改善やります。',
          tag: ['Laravel', 'Heroku']
        },
        {
          title: 'Twin:te',
          year: '2019',
          picture: require('~/assets/images/Twinte1-iPad.jpg'),
          link: 'https://twinte.net/',
          description:
            '筑波大生専用の時間割アプリ。2人で共同開発。バックグラウンドを担当。Twin:te Projectの原点である。「簡単に・詳細で・見やすく・使いやすい」時間割を目標に制作。 しかしほとんどフロントエンドの機能なのである。',
          tag: ['PHP', 'Ubuntu']
        },
        {
          title: 'WEB版デンモク',
          year: '2018',
          picture: require('~/assets/images/WEBdenmoku1.jpg'),
          link: 'https://work.takonasu.net/denmoku',
          description:
            '先輩からAPIの提供を受けてブラウザからカラオケの選曲をできるように。ただしDAMに限る。',
          tag: ['PHP']
        },
        {
          title: '揺れ見るbot',
          year: '2018',
          picture: require('~/assets/images/Yuremiru.jpg'),
          link: 'https://twitter.com/Yuremiru_bot',
          description:
            '地震が起きた時いつも強震モニタをスクショしてツイートしていたので自動化した。暇な春休みを使って制作。使用していた強震モニタのサービスが終了してしまったため現在は稼働していない。',
          tag: ['C#', 'フォームアプリ']
        },
        {
          title: 'バジリスクタイムロゴジェネレータ',
          year: '2018',
          picture: require('~/assets/images/maumarutime.jpg'),
          link: 'https://maumarutime.ml/',
          description:
            'ありそうでなかったので、教習所の空き時間で水のように優しく 花のように激しく制作。利用者が最近増えてきた。ログを見ると下ネタを入力する人が多い。',
          tag: ['PHP']
        },
        {
          title: 'クイズ研究同好会　早押し機 改',
          year: '2018',
          picture: require('~/assets/images/Quiz2.jpg'),
          link: '',
          description:
            '卒業記念にみんなで早押し大会をするために制作。早押し機本体をアプリ化。無理やりパワポと連携させ、得点や早押しの回答権をモニターに表示できるようにした。',
          tag: ['C#', 'フォームアプリ', 'Arduino']
        },
        {
          title: 'クラス企画来場者管理システム 改	',
          year: '2017',
          picture: require('~/assets/images/6B.jpg'),
          link: '',
          description:
            '高校3年時の文化祭クラス企画。射撃の全てを自動化。入場者の得点ランキングを教室入り口の大型モニターで表示。サーバー（ノーパソ）を教室に半年間設置していた。燃えなくてよかった。',
          tag: ['C#', 'フォームアプリ', 'ASP.NET', 'WindowsServer']
        },
        {
          title: 'クイズ研究同好会　早押し機',
          year: '2016',
          picture: require('~/assets/images/Quiz.jpg'),
          link: '',
          description:
            'ボタンはあるのに早押し機本体がないというバグが起きていたため、本体をAVRマイコンで制作。やっとちゃんとした早押しができるようになった。',
          tag: ['AVRマイコン']
        },
        {
          title: 'クラス企画来場者管理システム',
          year: '2016',
          picture: require('~/assets/images/5-ds-mansion.jpg'),
          link: '',
          description:
            '高校2年時の文化祭クラス企画。迷宮で謎を解きつつ、点数を競う企画。入場者の得点ランキングが自動で専用HPに公開されるシステムを構築した。受付でiPadを用いて入退場を管理していたが、UIが悪くてヒューマンエラーが多発した。',
          tag: ['C#', 'ASP.NET']
        },
        {
          title: 'スクフェスボタン',
          year: '2016',
          picture: require('~/assets/images/sukufes.jpg'),
          link: 'https://www.nicovideo.jp/watch/sm29680260',
          description:
            'スクフェスを物理ボタンでできるようにした。ただしPCのみ対応という謎仕様。PCのスクフェスシミュレーターで使用できる。なお、その後ジャンケンマシンとして再利用された。',
          tag: ['Arduino']
        },
        {
          title: 'クイズ効果音操作アプリ',
          year: '2016',
          picture: require('~/assets/images/StudentHall.jpg'),
          link:
            'http://www.namiki-cs.ibk.ed.jp/?action=common_download_main&upload_id=2139',
          description:
            '高校の文化祭の委員会開催であるクイズ大会の効果音を簡単に再生できるアプリ。イントロクイズもこれで簡単に出題できる。',
          tag: ['C#', 'フォームアプリ']
        }
      ],
      viewYear: 'all'
    }
  },
  computed: {
    filterArticleByYear: function() {
      return this.articles.filter(el => {
        return el.year == this.viewYear || this.viewYear == 'all'
      })
    }
  }
}
</script>
