# encoding: utf-8

require 'uri'
require 'net/https'
require 'nokogiri'

iroha = ["%82%a0","%82%a2","%82%a4","%82%a6","%82%a8","%82%a9","%82%ab","%82%ad",
     "%82%af","%82%b1","%82%b3","%82%b5","%82%b7","%82%b9","%82%bb","%82%bd",
     "%82%bf","%82%c2","%82%c4","%82%c6","%82%c8","%82%c9","%82%ca","%82%cb",
     "%82%cc","%82%cd","%82%d0","%82%d3","%82%d6","%82%d9","%82%dc","%82%dd",
     "%82%de","%82%df","%82%e0","%82%e2","%82%e4","%82%e6","%82%e7","%82%e8",
     "%82%e9","%82%ea","%82%eb","%82%ed"]

bus_uri = "http://www.hakobus.jp/s_timetable02.php?generationcode=" + "20161101" + "&word="

def busnum(bus_uri, str)
  uri = URI.parse(bus_uri + str)
  http = Net::HTTP.new(uri.host, uri.port)
  req = Net::HTTP::Get.new(uri.path + '?' + uri.query)
  res = http.request(req)

  res.body.encode("UTF-8","Shift_JIS")
end

File.open('stop_num.csv', 'w') do |file|
  iroha.each do |str|

    # out = str.tr('+',' ').gsub(/%([A-Fa-f0-9][A-Fa-f0-9])/) { [$1.hex].pack('C') }
    # out.force_encoding("Shift_JIS")
    # puts out
    puts URI.unescape(str).encode('utf-8','shift_JIS')
    doc = Nokogiri::HTML.parse( busnum(bus_uri, str), nil, 'utf-8')

    doc.xpath('//option').each do |node|
      file.puts node.attribute('value').value + "," + node.inner_text
    end

    sleep(3)
  end
end
