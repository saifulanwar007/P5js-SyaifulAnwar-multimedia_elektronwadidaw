let electrons = [];

function setup() {

  // Membuat canvas 3D

  createCanvas(400, 400, WEBGL);

  // Membuat posisi awal untuk elektron

  for (let i = 0; i < 6; i++) { // 6 elektron

    let angle = (TWO_PI / 6) * i; // Elektron terdistribusi merata

    electrons.push({

      radius: random(80, 120), // Jarak elektron dari inti

      angle: angle,

      speed: random(0.02, 0.05), // Kecepatan rotasi bervariasi

    });

  }

}

function draw() {

  // Mengatur latar belakang

  background(20);

  // Menambahkan pencahayaan

  directionalLight(255, 255, 255, 0, 0, -1);

  ambientLight(50);

  // Membuat inti atom

  push();

  noStroke();

  fill(200, 50, 50); // Warna inti merah

  sphere(40); // Inti berbentuk bola

  pop();

  // Menggambar elektron

  for (let i = 0; i < electrons.length; i++) {

    let e = electrons[i];

    // Update posisi sudut elektron

    e.angle += e.speed;

    // Hitung posisi elektron berdasarkan radius dan sudut

    let x = cos(e.angle) * e.radius;

    let y = sin(e.angle) * e.radius;

    let z = sin(frameCount * 0.01 + i) * 50; // Gerakan acak di sumbu Z

    // Gambar lintasan elektron (orbit)

    push();

    noFill();

    stroke(100, 100, 255); // Orbit warna biru

    ellipse(0, 0, e.radius * 2, e.radius * 2); // Orbit elips

    pop();

    // Gambar elektron

    push();

    translate(x, y, z); // Pindahkan ke posisi elektron

    noStroke();

    fill(50, 200, 255); // Warna elektron biru terang

    sphere(10); // Elektron berbentuk bola kecil

    pop();

  }

}


