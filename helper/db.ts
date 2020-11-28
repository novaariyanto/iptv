export interface IChannel {
  id: number
  name: string
  image: string
  group: string
  url?: string
}

export const Channels: IChannel[] = [
  {
    id: 204,
    name: "sctv",
    group: "nasional",
    image: "https://i.postimg.cc/B6ZFwp58/sctv.png",
  },
  {
    id: 665,
    name: "rcti",
    group: "nasional",
    image:
      "https://1.bp.blogspot.com/-HO0bKm61gag/XbLtZYpFkVI/AAAAAAAAAtI/5cG_swWFmsQCd0JyWBI080A1zTis6N_hACLcBGAsYHQ/s1600/20191010_164600.png",
  },
  {
    id: 733,
    name: "trans tv",
    group: "nasional",
    image:
      "https://www.useetv.com/assets/images/channel/logo_transtv_big1.png?v=2.0.0.13",
  },
  {
    id: 734,
    name: "trans 7",
    group: "nasional",
    image: "https://i.postimg.cc/YCfxSb39/trans7.png",
  },
  {
    id: 870,
    name: "mnctv",
    group: "nasional",
    image:
      "https://3.bp.blogspot.com/-stEJUE6q-4Y/XbMzkvzx3wI/AAAAAAAAAtk/UnrCWgCowNEg_DOaG6Akf9aDcwcHyPAvgCLcBGAsYHQ/s320/20191026_003920.png",
  },
  {
    id: 778,
    name: "gtv",
    group: "nasional",
    image: "https://i.postimg.cc/HsqNM8Hc/globaltv.png",
  },
  {
    id: 777,
    name: "metrotv",
    group: "nasional",
    image: "https://i.postimg.cc/QCYc7yzg/metrotv.png",
  },
  {
    id: 875,
    name: "net",
    group: "nasional",
    image: "https://images.useetv.com/logo_net_big1.png?v=2.0.0.13",
  },
  {
    id: 205,
    name: "indosiar",
    group: "nasional",
    image: "https://i.postimg.cc/QdwWh5Lt/indosiar.png",
  },
  {
    id: 5409,
    name: "inews",
    group: "nasional",
    image: "https://i.postimg.cc/3r4RxmbC/inewstv.png",
  },
  {
    id: 1561,
    name: "rtv",
    group: "nasional",
    image: "https://i.postimg.cc/fb172pW8/rajawalitv.png",
  },
  {
    id: 874,
    name: "kompas tv",
    group: "nasional",
    image:
      "https://www.useetv.com/assets/images/channel/logo_kompastv_small.png?v=2.0.0.13",
  },
  {
    id: 6441,
    name: "tvri",
    group: "nasional",
    image:
      "https://www.useetv.com/assets/images/channel/logo_tvri_small1.png?v=2.0.0.13",
  },
  {
    id: 6840,
    name: "mola tv free",
    group: "sport",
    image:
      "https://assets.pikiran-rakyat.com/crop/160x633:554x953/x/photo/2020/09/08/2053221245.png",
  },
  {
    id: 0,
    name: "AREK TV SURABAYA",
    image:
      "https://ninmedia.tv/wp-content/uploads/2019/02/cropped-Ninmedia-Edit-183x42.png",
    group: "local",
    url: "http://stream2.ninmedia.tv/arektv/arek_360p/playlist.m3u8",
  },

  {
    id: 0,
    name: "jogja tv",
    group: "local",
    image:
      "https://jogjatv.tv/wp-content/uploads/2015/08/LOGO-JOGJA-TV-NEW-pii-new1.png",
    url: "https://stream.jogjatv.co.id/jtvlive/stream/index.m3u8",
  },
  {
    id: 0,
    name: "TEGAR TV",
    image:
      "https://m3u-editor.com/storage/channel-logos/07cd9d90-3cc5-11ea-9aa8-0b5bd3ba261d/92697/14040386.jpg",
    group: "local",
    url: "http://wms.klikhost.com/tegartv/live/playlist.m3u8",
  },

  {
    id: 0,
    name: "TVRI DKI Jakarta",
    image: "",
    group: "local",
    url:
      "http://118.97.50.107/Content/HLS/Live/Channel(TVRIDKI)/Stream(03)/index.m3u8",
  },
  {
    id: 0,
    name: "TVRI Jakarta",
    image: "https://i.imgur.com/VH7TANA.png",
    group: "local",
    url:
      "http://wpc.d1627.nucdn.net:80/80D1627/o-tvri/Content/HLS/Live/Channel(TVRIDKI)/Stream(03)/index.m3u8",
  },
  {
    id: 0,
    name: "TVRI Jawa Barat",
    image: "",
    group: "local",
    url:
      "http://118.97.50.107/Content/HLS/Live/Channel(TVRIJABARBANDUNG)/index.m3u8",
  },

  {
    id: 0,
    name: "TVRI Jawa Barat",
    image: "https://i.imgur.com/tPvtrgk.png",
    group: "local",
    url:
      "http://118.97.50.107/Content/HLS/Live/Channel(TVRIJABARBANDUNG)/Stream(03)/index.m3u8",
  },
  {
    id: 0,
    name: "TVRI Jawa Tengah",
    image: "",
    group: "local",
    url:
      "http://118.97.50.107/Content/HLS/Live/Channel(TVRIJATENGSEMARANG)/index.m3u8",
  },
  {
    id: 0,
    name: "TVRI Jawa Timur",
    image: "",
    group: "local",
    url:
      "http://118.97.50.107/Content/HLS/Live/Channel(TVRIJATIMSURABAYA)/index.m3u8",
  },
  {
    id: 0,
    name: "TVRI Kanal 3",
    image: "https://i.imgur.com/RIwYxS9.png",
    group: "local",
    url:
      "http://wpc.d1627.nucdn.net:80/80D1627/o-tvri/Content/HLS/Live/Channel(TVRI3)/Stream(03)/index.m3u8",
  },
  {
    id: 0,
    name: "TVRI Yogyakarta",
    image: "",
    group: "local",
    url:
      "http://118.97.50.107/Content/HLS/Live/Channel(TVRIYOGYAKARTA)/index.m3u8",
  },
  {
    id: 0,
    name: "CNBC Indonesia",
    image: "https://upload.wikimedia.org/wikipedia/id/3/35/CNBC_Indonesia.png",
    group: "news",
    url: "https://live.cnbcindonesia.com/livecnbc/smil:cnbctv.smil/master.m3u8",
  },
  {
    id: 0,
    name: "CNN Indonesia",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/CNN_Indonesia.svg/1200px-CNN_Indonesia.svg.png",
    group: "news",
    url: "https://live.cnnindonesia.com/livecnn/smil:cnntv.smil/playlist.m3u8",
  },
  {
    id: 0,
    name: "BeritaSatu",
    image:
      "https://m3u-editor.com/storage/channel-logos/07cd9d90-3cc5-11ea-9aa8-0b5bd3ba261d/92697/14040323.png",
    group: "news",
    url: "https://b1news.beritasatumedia.com/Beritasatu/B1News_960x540.m3u8",
  },
  {
    id: 0,
    name: "Karaoke Channel",
    image: "https://i.postimg.cc/C53XtK5f/zaltv.png",
    group: "music",
    url:
      "http://edge.linknetott.swiftserve.com/live/BSgroup/amlst:karaokech/playlist.m3u8",
  },
  {
    id: 0,
    name: "Music Top",
    image: "",
    group: "music",
    url:
      "https://live-edge01.telecentro.net.ar/live/smil:musictop.smil/playlist.m3u8",
  },
  {
    id: 0,
    name: "Radio 51 TV",
    image: "Logo N/A",
    group: "music",
    url: "https://59d7d6f47d7fc.streamlock.net/canale51/canale51/playlist.m3u8",
  },
  {
    id: 0,
    name: "RRI Net",
    image: "https://pbs.twimg.com/media/DmaMDCBU8AAfd45.png",
    group: "music",
    url: "http://36.89.47.217:11935/rrinet/live/index.m3u8",
  },
]
