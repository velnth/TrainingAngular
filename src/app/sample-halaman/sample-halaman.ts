// mengimpor fungsi yang diperlukan dari pustaka angular
// Component adalah dekorator yang digunakan untuk mendefinsikan komponen
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// decorator juga yang berfungsi sebagai metadata
// yang memberi tahu Angular bahwa class berikutnya adalah
// sebuah komponen yang termasuk HTML dan Css nya
@Component({
  selector: 'app-sample-halaman',
  imports: [CommonModule],
  templateUrl: './sample-halaman.html',
  styleUrl: './sample-halaman.css'
})
export class SampleHalaman {
  // Properti(variable) dan tipdat dasar

  // properti bertipe string
  JudulHalaman : string = "Belajar TypeScript di Angular";
  subJudul: string;

  // properti bertipe data number
  jumlahKlik: number = 0;

  // properti bertipe data boolean
  apakahtombolAktif : boolean = false;

  // properti bertipe data array
  daftarNama : string[] = ['Andi', 'Budi', 'Caca'];

  // properti bertipe object
  dataPengguna: {nama: string, umur: number} = {nama: 'Andi', umur: 25};

  // properti bertipe data Any(sembarang)
  daftarSeseorang : any;
  constructor() {
    this.subJudul = "MEmahami data dasar di typescipt";
    this.dataPengguna = {nama: "Andi", umur: 25};
  }

  // lifecycle Hook : ngOnInit
  // ngOnInit adalah sebuah method(fungsi) yang akna dijalankan setelah komponen diinisialisasi
  ngOnInit() : void {
    this.apakahtombolAktif = true;
    console.log("ngOnInit dijalankan");
  }

  // method(fungsi) void tanpa mengembalikan nilai 
  tambahKlik(): void {
    this.jumlahKlik ++;
  }

  // metode dengan parameter dan mengembalikan nilai
  sapaPengguna(nama: string): string {
    return `Halo, ${nama}! Selamat Datang di Angular`;
  }

  // metode untuk menghapus suatu item dari array
  hapusNama(index: number): void {
    this.daftarNama.splice(index, 1);
  }
}
