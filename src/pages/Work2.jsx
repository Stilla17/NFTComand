import React from 'react'
import nega from './../assets/nega.png';
import video from './../assets/igm.png';
import dw from './../assets/dw.png';
import na from './../assets/op.png';

const Work2 = () => {
    return (
        <div className='flex'>
            <div>
                <h1 className='text-white text-3xl'>Detailed Story</h1>
                <div className='flex items-center gap-3'>
                    <div>
                        <h1 className='text-green-950 text-7xl pt-10'>
                            W
                        </h1>
                    </div>
                    <div>
                        <p className='w-185 pt-10'>Game ipsum dolor sit amet consectetur adipisicing elit. Sapiente quisquam aliquam praesentium architecto, quidem fugit hic eligendi nemo est dignissimos soluta harum in ex sunt odit, obcaecati, eum corrupti. Dolores, reprehenderit? Quos mollitia sed voluptate ex ipsa unde perferendis quam.</p>
                    </div>
                </div>

                <p className='pt-10 w-200'>Game ipsum dolor sit, amet consectetur adipisicing elit. Et quam exercitationem accusamus nam, quod dolorem libero deleniti ea excepturi, nemo minus, totam quas sunt explicabo facilis vitae aliquid voluptatibus dolore error hic sit similique? Molestias velit laborum voluptate reiciendis animi iure quod odit optio fugit a? Facere minus voluptatum error libero aspernatur labore voluptates saepe consequatur minima, reprehenderit, itaque cumque mollitia enim veritatis non totam nam explicabo. Ratione dolore quibusdam quis adipisci fugit, rerum voluptatem ab illum praesentium vero pariatur quidem, ea aut? Quasi consequatur magnam tenetur ab placeat ex odio optio! Aliquam nostrum dicta vero ducimus quod dolorem labore!</p>


                <div className='pt-10 '>
                    <div className='bg-green-950 w-200 rounded-2xl h-30'>
                        <p className='ps-5 pt-9'>Game ipsum dolor sit amet consectetur adipisicing elit. Aut quidem necessitatibus, ut autem quam praesentium qui nesciunt, corporis, asperiores reiciendis sequi quis. Consequatur, tempora hic.</p>
                    </div>
                </div>

                <p className='w-200 pt-10'>Game ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae distinctio itaque eveniet quam tenetur vitae ex ducimus? Eius exercitationem similique quibusdam laborum tempore. Dignissimos, in. Similique quisquam aperiam incidunt amet, harum illo eius quibusdam rerum consectetur soluta consequuntur obcaecati ut neque expedita in ipsam earum perferendis eos quod eveniet non a nostrum illum. Placeat eos animi doloribus enim inventore.</p>
            </div>

            <div className='pt-23 ps-45'>
                <div className='flex gap-5'>
                    <img className='w-10 rounded-lg' src={nega} alt="" />
                    <h1 className='text-white text-3xl'>Official Trailer</h1>
                </div>

                <img className='rounded-2xl pt-5 w-80' src={video} alt="" />

                <div className='pt-30 '>
                    <div className='bg-green-950 w-80 rounded-2xl h-30'>
                        <h1 className='text-white ps-5 pt-3'>UPLOADER</h1>
                        <div className='flex gap-4 ps-5 pt-2'>
                            <div>
                                <img className='rounded-full w-13 h-14 ' src={dw} alt="" />
                            </div>
                            <div className='pt-1 flex'>
                                <div>
                                    <h1>FitGirl_Official</h1>
                                    <p className='text-green-900'>Vip Uploader . 4.2k Posts</p>
                                </div>
                                <div className='pt-3 ps-3'>
                                    <img src={na} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work2