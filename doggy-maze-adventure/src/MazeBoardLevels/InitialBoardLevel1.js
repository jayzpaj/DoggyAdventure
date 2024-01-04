const generateBoard = () => {
    // 'W' represents walls, 'T' represents stop, 'D' represents doggy, 'B' represents bones
    const initialBoard = Array.from({ length: 8 }, () => Array(8).fill(' '));
  
    // Place walls
    initialBoard[0][2] = 'W';
    initialBoard[0][4] = 'W';
    initialBoard[0][5] = 'W';
    initialBoard[1][7] = 'W';
    initialBoard[1][0] = 'W';
    initialBoard[2][2] = 'W';
    initialBoard[2][4] = 'W';
    initialBoard[2][6] = 'W';
    initialBoard[2][1] = 'W';
    initialBoard[3][2] = 'W';
    initialBoard[4][5] = 'W';
    initialBoard[5][6] = 'W';
    initialBoard[4][1] = 'W';
    initialBoard[4][4] = 'W';
    initialBoard[4][7] = 'W';
    initialBoard[5][3] = 'W';
    initialBoard[5][5] = 'W';
    initialBoard[6][0] = 'W';
    initialBoard[6][2] = 'W';
    initialBoard[6][3] = 'W';
    initialBoard[6][7] = 'W';
    initialBoard[7][0] = 'W';
    initialBoard[7][5] = 'W';
  
    // Place stop
    initialBoard[7][7] = 'T';
  
    // Place doggy at the starting position
    initialBoard[0][0] = 'D';
  
    // Place bones
    initialBoard[0][7] = 'B';
    initialBoard[2][5] = 'B';
    initialBoard[3][3] = 'B';
    initialBoard[4][0] = 'B';
    initialBoard[5][4] = 'B';
    initialBoard[7][2] = 'B';
  
    return initialBoard;
  };

  export default generateBoard;