import React from 'react'
import Link from 'gatsby-link'
import BodyImages from 'react-body-images'
import Header from '../components/header'


const IndexPage = ({data}) => (
  <div className="">

  <BodyImages className='dimmed' bgImageArray={['https://content.octanis.org/storage/uploads/2018/08/23/5b7ec40e40a86IMG_8103.jpg']}>
    <Header mastHead={
          <div className="grid">
            <div className="grid__item sm-w-1/1">
            <div className="masterhead relative-parent">
              <h1 className="oc-brand-indicator">Learning means solving problems</h1>
              <p className="sm-w-3/5">At Octanis, we provide an environment where we turn theory into practice and learning means doing. We share experiences and tools, and make rapid incremental progress while embracing failure.  Above all, we accept everyone for who they are.
              </p>
              <a className="btn btn--large btn--primary cta" href="/about">How it works</a><br/>
            </div>
            </div>
          </div>
    } />
  </BodyImages>

    <div className="bg-gradient grid padded"></div>

    <div className="grid padded bg-darker pdgb++ pdgt++">
      <div className="grid__item sm-w-1/2">
        <h1 className="subtitled">Explore</h1>
        <h3 className="subtitle">The people in a line</h3>
        <p>
          Specialised devices on one tiny board form the rovers main computer. This little powerhouse controls everthing from driving to communicating with Mission Control. Designed to consume very little power, this board enables future rover missions requiring the rover to survive in complete darkness for up to 6 months - running only on battery. Move your mouse over the picture.
        </p>
        <a className="btn btn--large btn--default cta" href="/delta">Get your own</a>
      </div>

      <div className="grid__item sm-w-1/2 text-center  pdgl++ pdgr++">
        <div className="callout-block">
          <img src="/img/mainboard1.jpg" className="img-block" />
        </div>
      </div>
    </div>


    <div className=" bg-lighter  grid padded ">
      <div className="grid__item sm-w-1/2 text-center  pdgl++ pdgr++">
        <div className="callout-block">
          <img src="/img/mainboard1.jpg" className="img-block" />
        </div>
      </div>

      <div className="grid__item sm-w-1/2">
        <h1 className="subtitled">Discover</h1>
        <h3 className="subtitle">The people in a line</h3>
        <p>
          Specialised devices on one tiny board form the rovers main computer. This little powerhouse controls everthing from driving to communicating with Mission Control. Designed to consume very little power, this board enables future rover missions requiring the rover to survive in complete darkness for up to 6 months - running only on battery. Move your mouse over the picture.
        </p>
        <a className="btn btn--large btn--default cta" href="/delta">Get your own</a>
      </div>
    </div>


      <div className="grid padded bg-darker pdgb ">
        <div className="grid__item sm-w-1/2">
          <h1 className="subtitled">Make</h1>
          <h3 className="subtitle">The people in a line</h3>
          <p>
            Specialised devices on one tiny board form the rovers main computer. This little powerhouse controls everthing from driving to communicating with Mission Control. Designed to consume very little power, this board enables future rover missions requiring the rover to survive in complete darkness for up to 6 months - running only on battery. Move your mouse over the picture.
          </p>
          <a className="btn btn--large btn--default cta" href="/delta">Get your own</a>
        </div>

        <div className="grid__item sm-w-1/2 text-center  pdgl++ pdgr++">
          <div className="callout-block">
            <img src="/img/mainboard1.jpg" className="img-block" />
          </div>
        </div>
      </div>

      <div className="grid padded bg-darker pdgb ">
        <div className="grid__item sm-w-1/2">
          <h1 className="subtitled">Evolve</h1>
          <h3 className="subtitle">The people in a line</h3>
          <p>
            Specialised devices on one tiny board form the rovers main computer. This little powerhouse controls everthing from driving to communicating with Mission Control. Designed to consume very little power, this board enables future rover missions requiring the rover to survive in complete darkness for up to 6 months - running only on battery. Move your mouse over the picture.
          </p>
          <a className="btn btn--large btn--default cta" href="/delta">Get your own</a>
        </div>

        <div className="grid__item sm-w-1/2 text-center  pdgl++ pdgr++">
          <div className="callout-block">
            <img src="/img/mainboard1.jpg" className="img-block" />
          </div>
        </div>
      </div>
</div>

)

export default IndexPage
