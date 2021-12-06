import React from 'react'
import tw from "tailwind-styled-components";
import { carList } from '../data/CarList';

const RideSelector = () => {
    return (
        <Wrapper>
            <Title>
                Choose a ride, or swipe up for more
            </Title>
            <CarList>
                {
                    carList.map((data, index) => {
                        return (
                            
                        <Car key={index}>
                    <CarImage src={data.imgUrl} />
                    <CarDetails>
                        <Service>
                            {data.service}

                        </Service>
                        <Time>{`${data.min} mins away`}</Time>

                    </CarDetails>
                    <Price>
                        GHS 30.00

                    </Price>
                </Car>
                        )
                        
                    })
                }
                
            </CarList>
            
        </Wrapper>
    )
}

export default RideSelector

const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500
`

const Car = tw.div`
flex m-2 items-centerf
`
const CarImage = tw.img`
h-14 mr-2
`
const CarDetails = tw.div`
flex-1 ml-2
`
const Price = tw.div`
text-sm
`

const CarList = tw.div`
overflow-y-scroll

`

const Title = tw.div`
text-gray-500 text-sm text-center py-2 border-b
`

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col
`