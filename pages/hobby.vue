<template>
  <section class="section">
    <div class="card">
      <div class="card-content">
        <p class="title">
          Hobby
        </p>
        <p class="subtitle">
          趣味をだらだら書いていくページです。
        </p>
        <div class="content">
          <p class="subtitle">
            趣味
          </p>
          <ul>
            <li>
              ラブライブシリーズ
            </li>
            <li>
              カラオケ
            </li>
            <li>
              ピアノ
            </li>
          </ul>
          <p class="subtitle">
            現地参加したライブ（これをまとめたかった）
          </p>

          <div
            v-for="(item, key) of participatedEvents"
            :key="key"
            style="margin-bottom:1rem;"
          >
            <header>
              {{ $dayjs(item.day).format('YYYY年MM月DD日 (dd)') }}
            </header>
            <div style="padding-left:1rem;">
              <span style="font-weight:bold">{{ item.name }}</span> <br />
              {{ item.place }} <br />
              <a v-if="item.link != ''" :href="item.link">ライブ公式ページ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      participatedEvents: [
        {
          day: '2018-06-09T00:00:00+09:00',
          name:
            'ラブライブ！サンシャイン!! Aqours 3rd LoveLive! Tour ～WONDERFUL STORIES～ 埼玉公演 Day1',
          link: 'https://www.lovelive-anime.jp/uranohoshi/sp_3rdlive.php',
          place: 'メットライフドーム',
          memo: ''
        },
        {
          day: '2018-11-17T00:00:00+09:00',
          name:
            'ラブライブ！サンシャイン!! Aqours 4th LoveLive! ～Sailing to the Sunshine～ Day1',
          link: 'https://www.lovelive-anime.jp/uranohoshi/sp_4thlive.php',
          place: '東京ドーム',
          memo: ''
        },
        {
          day: '2018-11-18T00:00:00+09:00',
          name:
            'ラブライブ！サンシャイン!! Aqours 4th LoveLive! ～Sailing to the Sunshine～ Day2',
          link: 'https://www.lovelive-anime.jp/uranohoshi/sp_4thlive.php',
          place: '東京ドーム',
          memo: ''
        },
        {
          day: '2019-01-06T00:00:00+09:00',
          name:
            'ラブライブ！サンシャイン!!Aqours クラブ活動 LIVE & FAN MEETING 2018 ユニット対抗全国ツアー 千葉公演Day2 1回目',
          link: 'https://www.lovelive-anime.jp/uranohoshi/sp_fmt2018.php',
          place: '幕張メッセ　イベントホール',
          memo: 'Guilty Kiss'
        },
        {
          day: '2019-02-23T00:00:00+09:00',
          name:
            'LAWSON presents TrySail Live Tour 2019 "The TrySail Odyssey" 千葉 Day1',
          link: 'https://trysail.jp/contents/210366',
          place: '幕張メッセ　イベントホール',
          memo: ''
        },
        {
          day: '2019-03-02T00:00:00+09:00',
          name:
            'ラブライブ！サンシャイン!!Aqours クラブ活動 LIVE & FAN MEETING 2018 ユニット対抗全国ツアー 東京公演 Day1 2回目',
          link: 'https://www.lovelive-anime.jp/uranohoshi/sp_fmt2018.php',
          place: '武蔵野の森スポーツプラザ・メインアリーナ',
          memo: ''
        },
        {
          day: '2019-06-08T00:00:00+09:00',
          name:
            'ラブライブ！サンシャイン!! Aqours 5th LoveLive! ～Next SPARKLING!!～ Day1',
          link: 'https://www.lovelive-anime.jp/uranohoshi/sp_5thlive.php',
          place: 'メットライフドーム',
          memo: ''
        },
        {
          day: '2019-06-09T00:00:00+09:00',
          name:
            'ラブライブ！サンシャイン!! Aqours 5th LoveLive! ～Next SPARKLING!!～ Day2',
          link: 'https://www.lovelive-anime.jp/uranohoshi/sp_5thlive.php',
          place: 'メットライフドーム',
          memo: ''
        },
        {
          day: '2019-08-31T00:00:00+09:00',
          name: 'Animelo Summer Live 2019 -STORY- Day2',
          link: 'https://anisama.tv/2019/',
          place: 'さいたまスーパーアリーナ',
          memo: ''
        },
        {
          day: '2020-01-18T00:00:00+09:00',
          name: 'ラブライブ！フェス Day1',
          link: 'https://www.lovelive-anime.jp/9th-anniversary/fest/',
          place: 'さいたまスーパーアリーナ',
          memo: ''
        },
        {
          day: '2020-02-09T00:00:00+09:00',
          name: 'Guilty Kiss First LOVELIVE! ~ New Romantic Sailors ~ Day2',
          link: 'https://trysail.jp/contents/210366',
          place: '武蔵野の森スポーツプラザ・メインアリーナ',
          memo: ''
        },
        {
          day: '2021-03-21T00:00:00+09:00',
          name:
            'ラブライブ！虹ヶ咲学園スクールアイドル同好会 校内シャッフルフェスティバル Day2',
          link: 'https://www.lovelive-anime.jp/nijigasaki/sp_splive.php',
          place: 'ぴあアリーナMM',
          memo: ''
        },
        {
          day: '2021-04-24T00:00:00+09:00',
          name: '鬼頭明里ファンクラブイベント「smile giving day vol.1」 夜の部',
          link: 'https://kitoakari.com/news/post-426',
          place: '千葉県文化会館',
          memo: ''
        },
        {
          day: '2021-05-08T00:00:00+09:00',
          name:
            'ラブライブ！虹ヶ咲学園スクールアイドル同好会 3rd Live! School Idol Festival ～夢の始まり～ Day1',
          link: 'https://www.lovelive-anime.jp/nijigasaki/sp_3rdlive.php',
          place: 'メットライフドーム',
          memo: ''
        }
      ]
    }
  },
  computed: {}
}
</script>
