const CardBox = () => {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg bg-white shadow-lg transition duration-500 ease-in-out hover:shadow-xl">
      <img src="https://cdn.crowdpic.net/detail-thumb/thumb_d_2F583E5543F7E19139C6FCFFBF9607A6.jpg" className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="mb-2 truncate text-[1.2rem] font-semibold">vite 에서 env 설정해서 proxy 사용하기 (+CRA에서 proxy 설정)</h2>
        <p className="line-clamp-2 text-sm text-gray-600">
          매번 CRA(create-react-app)으로만 프로젝트를 설정하다가 이번에는 vite로 진행해보았다.CRA에서 proxy 설정CRA는 proxy를 설정하기 위해 "http-proxy-middleware" 라이브러리를 별도로 설치하여
          진행했다.npm install http-proxy-middleware//setupProxy.
        </p>
      </div>
    </div>
  )
}

export default CardBox
