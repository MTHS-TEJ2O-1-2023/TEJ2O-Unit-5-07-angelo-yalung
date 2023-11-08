/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Nov 2023
 * This program makes a servo turn to 180 degrees on pressing the B button and 0 degrees on pressing the A button
*/

// variables
const servo1 = robotbit.Servos.S1

// setup
basic.clearScreen()
basic.pause(500)
basic.showIcon(IconNames.Happy)

// on A Button
input.onButtonPressed(Button.A, function () {
  robotbit.Servo(servo1, 0)
  basic.showNumber(0)
  basic.showIcon(IconNames.SmallSquare)
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})

// on B Button
input.onButtonPressed(Button.B, function () {
  robotbit.Servo(servo1, 180)
  basic.showNumber(180)
  basic.showIcon(IconNames.SmallSquare)
  basic.clearScreen()
  basic.showIcon(IconNames.Happy)
})
