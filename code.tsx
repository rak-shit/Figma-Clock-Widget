// This is a counter widget with buttons to increment and decrement the number.

const { widget } = figma
const { useSyncedState, AutoLayout, Text, useEffect, waitForTask } = widget

function Widget() {
  const [time, setTime] = useSyncedState('time', new Date().toLocaleTimeString())

  function tick() {
    setTime(new Date().toLocaleTimeString())
  }

  useEffect(() => {
    waitForTask(new Promise(resolve => {
      setInterval(() => {
        tick()
        resolve('Date updated')
      }, 1000)
    }))
  })

  return (
    <AutoLayout
      verticalAlignItems={'center'}
      spacing={8}
      padding={16}
      cornerRadius={8}
      fill={'#FFFFFF'}
      stroke={'#E6E6E6'}
    >
      <Text>
        {time}
      </Text>
    </AutoLayout>
  )
}

widget.register(Widget)
