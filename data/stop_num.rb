# encoding: utf-8

require 'uri'
require 'net/https'
require 'nokogiri'

# 五十音で検索した結果をリスト化する
iroha = ["%82%a0","%82%a2","%82%a4","%82%a6","%82%a8","%82%a9","%82%ab","%82%ad",
     "%82%af","%82%b1","%82%b3","%82%b5","%82%b7","%82%b9","%82%bb","%82%bd",
     "%82%bf","%82%c2","%82%c4","%82%c6","%82%c8","%82%c9","%82%ca","%82%cb",
     "%82%cc","%82%cd","%82%d0","%82%d3","%82%d6","%82%d9","%82%dc","%82%dd",
     "%82%de","%82%df","%82%e0","%82%e2","%82%e4","%82%e6","%82%e7","%82%e8",
     "%82%e9","%82%ea","%82%eb","%82%ed"]


# 指定した検索ワードで検索して結果をHTMLで返す（バスロケのサイトはShift-Jis）
def busnum(str)
  # 検索結果のURI
  # ISSUE: バス停情報の変更日でIDが変わるので注意，今は固定にしている
  bus_uri = "http://www.hakobus.jp/s_timetable02.php?generationcode=" + "20161101" + "&word="

  uri = URI.parse(bus_uri + str)
  http = Net::HTTP.new(uri.host, uri.port)
  req = Net::HTTP::Get.new(uri.path + '?' + uri.query)
  res = http.request(req)

  res.body.encode("UTF-8","Shift_JIS")
end


# Nokogiriでパースし，csvで出力（重複があるので別プログラムでユニークにしている）
File.open('stop_num.csv', 'w') do |file|
  iroha.each do |str|
    puts URI.unescape(str).encode('utf-8','shift_JIS')
    doc = Nokogiri::HTML.parse( busnum(str), nil, 'utf-8')

    doc.xpath('//option').each do |node|
      file.puts node.attribute('value').value + "," + node.inner_text
    end

    # サーバ負荷を考えて3秒待つ
    sleep(3)
  end
end
