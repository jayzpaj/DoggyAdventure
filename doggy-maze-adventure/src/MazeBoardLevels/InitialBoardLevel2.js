const generateBoards = () => {
    // 'W' represents walls, 'T' represents treasure, 'D' represents doggy, 'B' represents bones
    const initialBoard = Array.from({ length: 16 }, () => Array(16).fill(' '));
  
    // Place walls
    initialBoard[0][2] = 'W';
    initialBoard[0][6] = 'W';
    initialBoard[0][9] = 'W';
    initialBoard[0][13] = 'W';
    initialBoard[0][14] = 'W';
    initialBoard[1][2] = 'W';
    initialBoard[1][3] = 'W';
    initialBoard[1][7] = 'W';
    initialBoard[1][10] = 'W';
    initialBoard[1][11] = 'W';
    initialBoard[1][14] = 'W';
    initialBoard[2][0] = 'W';
    initialBoard[2][3] = 'W';
    initialBoard[2][5] = 'W';
    initialBoard[2][15] = 'W';
    initialBoard[3][6] = 'W';
    initialBoard[3][7] = 'W';
    initialBoard[3][9] = 'W';
    initialBoard[3][12] = 'W';
    initialBoard[3][13] = 'W';
    initialBoard[3][15] = 'W';
    initialBoard[4][1] = 'W';
    initialBoard[4][4] = 'W';
    initialBoard[4][6] = 'W';
    initialBoard[4][9] = 'W';
    initialBoard[4][10] = 'W';
    initialBoard[4][15] = 'W';
    initialBoard[5][3] = 'W';
    initialBoard[5][4] = 'W';
    initialBoard[5][7] = 'W';
    initialBoard[5][8] = 'W';
    initialBoard[5][12] = 'W';
    initialBoard[5][14] = 'W';
    initialBoard[6][2] = 'W';
    initialBoard[6][4] = 'W';
    initialBoard[6][14] = 'W';
    initialBoard[7][0] = 'W';
    initialBoard[7][6] = 'W';
    initialBoard[7][7] = 'W';
    initialBoard[7][9] = 'W';
    initialBoard[7][10] = 'W';
    initialBoard[7][12] = 'W';
    initialBoard[7][13] = 'W';
    initialBoard[7][15] = 'W';
    initialBoard[8][0] = 'W';
    initialBoard[8][3] = 'W';
    initialBoard[8][5] = 'W';
    initialBoard[8][9] = 'W';
    initialBoard[9][0] = 'W';
    initialBoard[9][1] = 'W';
    initialBoard[9][3] = 'W';
    initialBoard[9][4] = 'W';
    initialBoard[9][5] = 'W';
    initialBoard[9][10] = 'W';
    initialBoard[9][11] = 'W';
    initialBoard[9][12] = 'W';
    initialBoard[9][13] = 'W';
    initialBoard[10][3] = 'W';
    initialBoard[10][7] = 'W';
    initialBoard[10][10] = 'W';
    initialBoard[10][11] = 'W';
    initialBoard[10][13] = 'W';
    initialBoard[10][15] = 'W';
    initialBoard[11][1] = 'W';
    initialBoard[11][4] = 'W';
    initialBoard[11][5] = 'W';
    initialBoard[11][8] = 'W';
    initialBoard[11][9] = 'W';
    initialBoard[11][15] = 'W';
    initialBoard[12][1] = 'W';
    initialBoard[12][2] = 'W';
    initialBoard[12][4] = 'W';
    initialBoard[12][6] = 'W';
    initialBoard[12][13] = 'W';
    initialBoard[13][2] = 'W';
    initialBoard[13][3] = 'W';
    initialBoard[13][10] = 'W';
    initialBoard[13][11] = 'W';
    initialBoard[13][12] = 'W';
    initialBoard[13][14] = 'W';
    initialBoard[14][0] = 'W';
    initialBoard[14][2] = 'W';
    initialBoard[14][5] = 'W';
    initialBoard[14][6] = 'W';
    initialBoard[14][7] = 'W';
    initialBoard[14][9] = 'W';
    initialBoard[14][15] = 'W';
    initialBoard[15][0] = 'W';
    initialBoard[15][1] = 'W';
    initialBoard[15][5] = 'W';
    initialBoard[15][12] = 'W';
    initialBoard[15][13] = 'W';


  
    // Place treasure
    initialBoard[15][15] = 'T';
  
    // Place doggy at the starting position
    initialBoard[0][0] = 'D';
  
    // Place bones
    initialBoard[1][4] = 'B';
    initialBoard[4][14] = 'B';
    initialBoard[5][0] = 'B';
    initialBoard[5][9] = 'B';
    initialBoard[7][2] = 'B';
    initialBoard[9][14] = 'B';
    initialBoard[10][12] = 'B';
    initialBoard[13][0] = 'B';
    initialBoard[13][9] = 'B';
    initialBoard[14][4] = 'B';

    return initialBoard;
  };

  export default generateBoards;