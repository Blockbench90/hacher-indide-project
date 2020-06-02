import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Collaps from '../../assets/video/Collaps.mp4'
class HawToFindAs extends Component {
    render () {
        return <ReactPlayer url={Collaps} playing loop/>
    }
}
export default HawToFindAs;