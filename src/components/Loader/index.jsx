import React from 'react'
import { Oval } from "react-loader-spinner"
import { LoaderContainer } from "./styles"

const Loader = () => {
  return (
    <>
      <LoaderContainer>
        <Oval
          height={80}
          width={80}
          color="#0f00ff"
          wrapperStyle={{}}
          wrapperClass=""
          visible
          ariaLabel='oval-loading'
          secondaryColor="#0d003c"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </LoaderContainer>
    </>
  )
}

export default Loader