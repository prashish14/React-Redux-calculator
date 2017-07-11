const PointTarget = Reactpoint.PointTarget

class AutoScalingText extends React.component {
    state = {
        scale: 1
    }
}

componentDidUpdate() {
    const { scale } = this.state
    const node = this.nose
    const parentNode = node.parentNode

    const availableWidth = parentNode.offsetWidth
    const actualWidth = node.offsetWidth
    const actualScale = availableWidth / actualWidth


}