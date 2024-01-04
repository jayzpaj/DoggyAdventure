const generateBoard = () => {
    // 'W' represents walls, 'T' represents treasure, 'D' represents doggy, 'B' represents bones
    const initialBoard = Array.from({ length: 32 }, () => Array(32).fill(' '));

    initialBoard[0][9] = 'W';
    initialBoard[0][14] = 'W';
    initialBoard[0][19] = 'W';
    initialBoard[0][20] = 'W';
    initialBoard[0][26] = 'W';
    initialBoard[0][27] = 'W';
    initialBoard[0][29] = 'W';

    initialBoard[1][2] = 'W';
    initialBoard[1][4] = 'W';
    initialBoard[1][7] = 'W';
    initialBoard[1][8] = 'W';
    initialBoard[1][11] = 'W';
    initialBoard[1][12] = 'W';
    initialBoard[1][16] = 'W';
    initialBoard[1][17] = 'W';
    initialBoard[1][23] = 'W';
    initialBoard[1][24] = 'W';
    initialBoard[1][26] = 'W';
    initialBoard[1][27] = 'W';
    initialBoard[1][29] = 'W';
    initialBoard[1][31] = 'W';

    initialBoard[2][1] = 'W';
    initialBoard[2][4] = 'W';
    initialBoard[2][5] = 'W';
    initialBoard[2][6] = 'W';
    initialBoard[2][11] = 'W';
    initialBoard[2][12] = 'W';
    initialBoard[2][13] = 'W';
    initialBoard[2][14] = 'W';
    initialBoard[2][17] = 'W';
    initialBoard[2][18] = 'W';
    initialBoard[2][20] = 'W';
    initialBoard[2][21] = 'W';
    initialBoard[2][22] = 'W';
    initialBoard[2][27] = 'W';

    initialBoard[3][2] = 'W';
    initialBoard[3][8] = 'W';
    initialBoard[3][9] = 'W';
    initialBoard[3][15] = 'W';
    initialBoard[3][23] = 'W';
    initialBoard[3][25] = 'W';
    initialBoard[3][27] = 'W';
    initialBoard[3][29] = 'W';

    initialBoard[4][2] = 'W';
    initialBoard[4][8] = 'W';
    initialBoard[4][7] = 'W';
    initialBoard[4][2] = 'W';
    initialBoard[4][5] = 'W';
    initialBoard[4][15] = 'W';
    initialBoard[4][23] = 'W';
    initialBoard[4][14] = 'W';
    initialBoard[4][22] = 'W';
    initialBoard[4][13] = 'W';
    initialBoard[4][31] = 'W';
    initialBoard[4][27] = 'W';
    initialBoard[4][15] = 'W';

    initialBoard[5][3] = 'W';
    initialBoard[5][2] = 'W';
    initialBoard[5][15] = 'W';
    initialBoard[5][4] = 'W';
    initialBoard[5][3] = 'W';
    initialBoard[5][4] = 'W';
    initialBoard[5][2] = 'W';
    initialBoard[5][3] = 'W';
    initialBoard[5][1] = 'W';
    initialBoard[5][14] = 'W';
    initialBoard[5][28] = 'W';
    initialBoard[5][31] = 'W';

    initialBoard[6][1] = 'W';
    initialBoard[6][4] = 'W';
    initialBoard[6][5] = 'W';
    initialBoard[6][16] = 'W';
    initialBoard[6][20] = 'W';
    initialBoard[6][22] = 'W';
    initialBoard[6][26] = 'W';
    initialBoard[6][28] = 'W';
    initialBoard[6][29] = 'W';
    initialBoard[6][30] = 'W';

    initialBoard[7][2] = 'W';
    initialBoard[7][4] = 'W';
    initialBoard[7][7] = 'W';
    initialBoard[7][8] = 'W';
    initialBoard[7][9] = 'W';
    initialBoard[7][11] = 'W';
    initialBoard[7][12] = 'W';
    initialBoard[7][14] = 'W';
    initialBoard[7][15] = 'W';
    initialBoard[7][19] = 'W';
    initialBoard[7][24] = 'W';
    initialBoard[7][25] = 'W';

    initialBoard[8][1] = 'W';
    initialBoard[8][5] = 'W';
    initialBoard[8][9] = 'W';
    initialBoard[8][12] = 'W';
    initialBoard[8][17] = 'W';
    initialBoard[8][20] = 'W';
    initialBoard[8][22] = 'W';
    initialBoard[8][24] = 'W';
    initialBoard[8][27] = 'W';
    initialBoard[8][28] = 'W';
    initialBoard[8][29] = 'W';
    initialBoard[8][31] = 'W';

    initialBoard[9][1] = 'W';
    initialBoard[9][4] = 'W';
    initialBoard[9][5] = 'W';
    initialBoard[9][6] = 'W';
    initialBoard[9][9] = 'W';
    initialBoard[9][13] = 'W';
    initialBoard[9][14] = 'W';
    initialBoard[9][15] = 'W';
    initialBoard[9][18] = 'W';
    initialBoard[9][20] = 'W';
    initialBoard[9][23] = 'W';
    initialBoard[9][29] = 'W';
    initialBoard[9][31] = 'W';

    initialBoard[10][2] = 'W';
    initialBoard[10][7] = 'W';
    initialBoard[10][10] = 'W';
    initialBoard[10][15] = 'W';
    initialBoard[10][19] = 'W';
    initialBoard[10][20] = 'W';
    initialBoard[10][25] = 'W';
    initialBoard[10][28] = 'W';
    initialBoard[10][30] = 'W';

    initialBoard[11][6] = 'W';
    initialBoard[11][9] = 'W';
    initialBoard[11][10] = 'W';
    initialBoard[11][11] = 'W';
    initialBoard[11][12] = 'W';
    initialBoard[11][13] = 'W';
    initialBoard[11][16] = 'W';
    initialBoard[11][19] = 'W';
    initialBoard[11][23] = 'W';
    initialBoard[11][24] = 'W';
    initialBoard[11][25] = 'W';
    initialBoard[11][26] = 'W';
    initialBoard[11][27] = 'W';

    initialBoard[12][1] = 'W';
    initialBoard[12][4] = 'W';
    initialBoard[12][5] = 'W';
    initialBoard[12][7] = 'W';
    initialBoard[12][14] = 'W';
    initialBoard[12][17] = 'W';
    initialBoard[12][18] = 'W';
    initialBoard[12][22] = 'W';
    initialBoard[12][29] = 'W';

    initialBoard[13][2] = 'W';
    initialBoard[13][8] = 'W';
    initialBoard[13][11] = 'W';
    initialBoard[13][15] = 'W';
    initialBoard[13][16] = 'W';
    initialBoard[13][17] = 'W';
    initialBoard[13][20] = 'W';
    initialBoard[13][21] = 'W';
    initialBoard[13][22] = 'W';
    initialBoard[13][25] = 'W';
    initialBoard[13][26] = 'W';
    initialBoard[13][29] = 'W';

    initialBoard[14][2] = 'W';
    initialBoard[14][3] = 'W';
    initialBoard[14][6] = 'W';
    initialBoard[14][7] = 'W';
    initialBoard[14][8] = 'W';
    initialBoard[14][9] = 'W';
    initialBoard[14][11] = 'W';
    initialBoard[14][12] = 'W';
    initialBoard[14][24] = 'W';
    initialBoard[14][29] = 'W';
    initialBoard[14][30] = 'W';

    initialBoard[15][0] = 'W';
    initialBoard[15][4] = 'W';
    initialBoard[15][8] = 'W';
    initialBoard[15][9] = 'W';
    initialBoard[15][12] = 'W';
    initialBoard[15][14] = 'W';
    initialBoard[15][15] = 'W';
    initialBoard[15][18] = 'W';
    initialBoard[15][22] = 'W';
    initialBoard[15][23] = 'W';
    initialBoard[15][25] = 'W';
    initialBoard[15][28] = 'W';

    initialBoard[16][1] = 'W';
    initialBoard[16][4] = 'W';
    initialBoard[16][8] = 'W';
    initialBoard[16][11] = 'W';
    initialBoard[16][13] = 'W';
    initialBoard[16][14] = 'W';
    initialBoard[16][16] = 'W';
    initialBoard[16][17] = 'W';
    initialBoard[16][18] = 'W';
    initialBoard[16][20] = 'W';
    initialBoard[16][21] = 'W';
    initialBoard[16][25] = 'W';
    initialBoard[16][28] = 'W';

    initialBoard[17][5] = 'W';
    initialBoard[17][7] = 'W';
    initialBoard[17][8] = 'W';
    initialBoard[17][13] = 'W';
    initialBoard[17][19] = 'W';
    initialBoard[17][23] = 'W';
    initialBoard[17][24] = 'W';
    initialBoard[17][25] = 'W';
    initialBoard[17][26] = 'W';
    initialBoard[17][29] = 'W';

    initialBoard[18][0] = 'W';
    initialBoard[18][3] = 'W';
    initialBoard[18][4] = 'W';
    initialBoard[18][6] = 'W';
    initialBoard[18][10] = 'W';
    initialBoard[18][11] = 'W';
    initialBoard[18][12] = 'W';
    initialBoard[18][13] = 'W';
    initialBoard[18][16] = 'W';
    initialBoard[18][17] = 'W';
    initialBoard[18][21] = 'W';
    initialBoard[18][29] = 'W';

    initialBoard[19][1] = 'W';
    initialBoard[19][4] = 'W';
    initialBoard[19][7] = 'W';
    initialBoard[19][8] = 'W';
    initialBoard[19][9] = 'W';
    initialBoard[19][15] = 'W';
    initialBoard[19][19] = 'W';
    initialBoard[19][22] = 'W';
    initialBoard[19][23] = 'W';
    initialBoard[19][24] = 'W';
    initialBoard[19][25] = 'W';
    initialBoard[19][28] = 'W';
    initialBoard[19][31] = 'W';

    initialBoard[20][1] = 'W';
    initialBoard[20][5] = 'W';
    initialBoard[20][12] = 'W';
    initialBoard[20][13] = 'W';
    initialBoard[20][14] = 'W';
    initialBoard[20][18] = 'W';
    initialBoard[20][21] = 'W';
    initialBoard[20][22] = 'W';
    initialBoard[20][26] = 'W';
    initialBoard[20][27] = 'W';
    initialBoard[20][28] = 'W';
    initialBoard[20][29] = 'W';

    initialBoard[21][3] = 'W';
    initialBoard[21][5] = 'W';
    initialBoard[21][8] = 'W';
    initialBoard[21][9] = 'W';
    initialBoard[21][15] = 'W';
    initialBoard[21][16] = 'W';
    initialBoard[21][17] = 'W';
    initialBoard[21][25] = 'W';
    initialBoard[21][28] = 'W';
    initialBoard[21][30] = 'W';

    initialBoard[22][2] = 'W';
    initialBoard[22][5] = 'W';
    initialBoard[22][9] = 'W';
    initialBoard[22][11] = 'W';
    initialBoard[22][13] = 'W';
    initialBoard[22][14] = 'W';
    initialBoard[22][19] = 'W';
    initialBoard[22][20] = 'W';
    initialBoard[22][23] = 'W';
    initialBoard[22][24] = 'W';
    initialBoard[22][27] = 'W';

    initialBoard[23][1] = 'W';
    initialBoard[23][5] = 'W';
    initialBoard[23][6] = 'W';
    initialBoard[23][11] = 'W';
    initialBoard[23][14] = 'W';
    initialBoard[23][15] = 'W';
    initialBoard[23][19] = 'W';
    initialBoard[23][20] = 'W';
    initialBoard[23][22] = 'W';
    initialBoard[23][24] = 'W';
    initialBoard[23][25] = 'W';
    initialBoard[23][28] = 'W';

    initialBoard[24][2] = 'W';
    initialBoard[24][6] = 'W';
    initialBoard[24][9] = 'W';
    initialBoard[24][16] = 'W';
    initialBoard[24][21] = 'W';
    initialBoard[24][26] = 'W';
    initialBoard[24][27] = 'W';
    initialBoard[24][28] = 'W';
    initialBoard[24][31] = 'W';

    initialBoard[25][3] = 'W';
    initialBoard[25][6] = 'W';
    initialBoard[25][8] = 'W';
    initialBoard[25][9] = 'W';
    initialBoard[25][13] = 'W';
    initialBoard[25][16] = 'W';
    initialBoard[25][19] = 'W';
    initialBoard[25][23] = 'W';
    initialBoard[25][26] = 'W';

    initialBoard[26][1] = 'W';
    initialBoard[26][5] = 'W';
    initialBoard[26][10] = 'W';
    initialBoard[26][11] = 'W';
    initialBoard[26][14] = 'W';
    initialBoard[26][17] = 'W';
    initialBoard[26][18] = 'W';
    initialBoard[26][21] = 'W';
    initialBoard[26][22] = 'W';
    initialBoard[26][24] = 'W';
    initialBoard[26][26] = 'W';
    initialBoard[26][29] = 'W';
    initialBoard[26][30] = 'W';

    initialBoard[27][3] = 'W';
    initialBoard[27][6] = 'W';
    initialBoard[27][9] = 'W';
    initialBoard[27][12] = 'W';
    initialBoard[27][15] = 'W';
    initialBoard[27][19] = 'W';
    initialBoard[27][21] = 'W';
    initialBoard[27][27] = 'W';
    initialBoard[27][31] = 'W';

    initialBoard[28][4] = 'W';
    initialBoard[28][6] = 'W';
    initialBoard[28][8] = 'W';
    initialBoard[28][9] = 'W';
    initialBoard[28][16] = 'W';
    initialBoard[28][17] = 'W';
    initialBoard[28][20] = 'W';
    initialBoard[28][21] = 'W';
    initialBoard[28][24] = 'W';
    initialBoard[28][25] = 'W';
    initialBoard[28][26] = 'W';
    initialBoard[28][27] = 'W';
    initialBoard[28][28] = 'W';

    initialBoard[29][0] = 'W';
    initialBoard[29][1] = 'W';
    initialBoard[29][6] = 'W';
    initialBoard[29][10] = 'W';
    initialBoard[29][12] = 'W';
    initialBoard[29][14] = 'W';
    initialBoard[29][18] = 'W';
    initialBoard[29][20] = 'W';
    initialBoard[29][23] = 'W';
    initialBoard[29][25] = 'W';
    initialBoard[29][29] = 'W';

    initialBoard[30][1] = 'W';
    initialBoard[30][2] = 'W';
    initialBoard[30][6] = 'W';
    initialBoard[30][7] = 'W';
    initialBoard[30][12] = 'W';
    initialBoard[30][15] = 'W';
    initialBoard[30][20] = 'W';
    initialBoard[30][26] = 'W';
    initialBoard[30][29] = 'W';

    initialBoard[31][5] = 'W';
    initialBoard[31][8] = 'W';
    initialBoard[31][9] = 'W';
    initialBoard[31][10] = 'W';
    initialBoard[31][11] = 'W';
    initialBoard[31][12] = 'W';
    initialBoard[31][15] = 'W';
    initialBoard[31][16] = 'W';
    initialBoard[31][18] = 'W';
    initialBoard[31][22] = 'W';
    initialBoard[31][23] = 'W';




  
    // Place treasure
    initialBoard[31][31] = 'T';
  
    // Place doggy at the starting position
    initialBoard[0][0] = 'D';
  
    // Place bones
    initialBoard[2][2] = 'B';
    initialBoard[4][2] = 'B';
    initialBoard[6][26] = 'B';
    initialBoard[3][18] = 'B';
    initialBoard[5][21] = 'B';
    initialBoard[7][30] = 'B';
    initialBoard[21][18] = 'B';
    initialBoard[13][21] = 'B';
    initialBoard[23][7] = 'B';
    initialBoard[15][18] = 'B';
    initialBoard[17][21] = 'B';
    initialBoard[20][7] = 'B';
    initialBoard[13][18] = 'B';
    initialBoard[9][21] = 'B';
    initialBoard[25][7] = 'B';
    initialBoard[11][18] = 'B';
    initialBoard[18][21] = 'B';
    initialBoard[10][7] = 'B';
    initialBoard[28][7] = 'B';
    initialBoard[27][18] = 'B';
    initialBoard[29][21] = 'B';
    initialBoard[30][7] = 'B';
    initialBoard[13][2] = 'B';
    initialBoard[9][5] = 'B';
    initialBoard[25][0] = 'B';
    initialBoard[11][8] = 'B';
    initialBoard[18][10] = 'B';
  
    return initialBoard;
  };

export default generateBoard;