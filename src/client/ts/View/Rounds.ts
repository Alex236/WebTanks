export class Rounds {
    public static roundOne = [
        [Road, Road, Road, Road, Road, Road, Road, Road, Road, Road, Road, Road, Road],
        [Road, Brick, Brick, Brick, Road, Road, Road, Road, Road, Brick, Brick, Brick, Road],
        [Road, Brick, Brick, Brick, Road, Brick, Brick, Brick, Road, Brick, Brick, Brick, Road],
        [Road, Road, Brick, Road, Road, Brick, Brick, Brick, Road, Road, Brick, Road, Road],
        [Road, Road, Road, Road, Road, Road, Brick, Road, Road, Road, Road, Road, Road],
        [Road, Road, Road, Road, Road, Road, Road, Road, Road, Road, Road, Road, Road],
        [Road, Road, Green, Green, Green, Green, Green, Green, Green, Green, Road, Road, Road],
        [Road, Green, Green, Green, Green, Green, Green, Green, Green, Green, Green, Green, Road],
        [Brick, Road, HardBrick, Road, HardBrick, Road, HardBrick, Road, HardBrick, Road, HardBrick, Road, Brick],
        [Brick, Road, Road, Road, Road, Road, Road, Road, Road, Road, Road, Road, Brick],
        [Road, Brick, Road, Brick, Brick, HardBrick, HardBrick, HardBrick, Brick, Brick, Road, Brick, Road],
        [Road, Brick, Road, Road, Road, Brick, Brick, Brick, Road, Road, Road, Brick, Road],
        [Road, Road, Road, Road, Road, Brick, Road, Brick, Road, Road, Road, Road, Road]
    ]
}


var Road = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

var Brick = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
]

var HardBrick = [
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2]
]

var Green = [
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3],
    [3, 3, 3, 3]
]


