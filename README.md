#### 奇安信笔试
##### 思路：
  ###### 边框的实现（一个带边框的div）：
    1. mousedown事件记录初始点的坐标
    2. mousemove事件记录结束点的坐标，通过比较两点的位置进行div的定位
    3. mouseup事件让div消失
  ###### checkbox的选取
    1.用二维数组存储了所有的checkbox，用自定义属性记录每个checkbox的坐标
    2.mousemove事件来记录第一个和最后一个checkbox的坐标，将两点这件的矩形区域进行checked 
  
