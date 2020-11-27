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
    id: 0,
    name: "jogja tv",
    group: "local",
    image:
      "https://jogjatv.tv/wp-content/uploads/2015/08/LOGO-JOGJA-TV-NEW-pii-new1.png",
    url: "https://stream.jogjatv.co.id/jtvlive/stream/index.m3u8",
  },
  {
    id: 0,
    name: "CNBC Indonesia",
    image: "https://upload.wikimedia.org/wikipedia/id/3/35/CNBC_Indonesia.png",
    group: "OTHERS",
    url:
      "https://live.cnbcindonesia.com/livecnbc/smil:cnbctv.smil/chunklist.m3u8",
  },
  {
    id: 0,
    name: "CNN Indonesia",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/CNN_Indonesia.svg/1200px-CNN_Indonesia.svg.png",
    group: "OTHERS",
    url: "https://live.cnbcindonesia.com/livecnbc/smil:cnbctv.smil/master.m3u8",
  },
  {
    id: 0,
    name: "ANIMAL PLANET HD",
    image: "",
    group: "OTHERS",
    url: "http://119.82.224.75:1935/live/ahsantv/playlist.m3u8",
  },
  {
    id: 0,
    name: "TEGAR TV",
    image:
      "https://m3u-editor.com/storage/channel-logos/07cd9d90-3cc5-11ea-9aa8-0b5bd3ba261d/92697/14040386.jpg",
    group: "local",
    url: "http://36.89.47.217:11935/rrinet/live/index.m3u8",
  },
  {
    id: 0,
    name: "CARTOON NETWORK",
    image: "",
    group: "OTHERS",
    url: "http://103.229.72.178/mobile/bungotv.stream.m3u8",
  },
]
