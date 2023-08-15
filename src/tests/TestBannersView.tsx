import { BannerV } from "@pix0/sfw-ui";

export function TestBannersView () {

    return   <div className="items-center p-2 flex font-bold">
    <div className="ml-2">
      <BannerV image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      title="Test banner xxx" subtitle="what a subtitle"/>
    </div>
    <div className="ml-2">
      <BannerV image="https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      title="Test banner xxx" subtitle="what a subtitle"/>
    </div> 

    <div className="ml-2">
      <BannerV image="https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      title="Test banner xxx" subtitle="what a subtitle" reverse/>
    </div> 

    <div className="ml-2">
      <BannerV image="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      title="Test banner xxx" subtitle="what a subtitle" reverse/>
    </div> 
    
  </div>
}