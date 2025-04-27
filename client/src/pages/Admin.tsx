import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, RefreshCw } from "lucide-react";

// Define the Referral type for the admin page
interface Referral {
  id: number;
  clientName: string;
  clientDob: string;
  clientPhone: string;
  clientEmail?: string;
  clientAddress?: string;
  referrerName: string;
  referrerOrganization: string;
  referrerPhone: string;
  referrerEmail: string;
  transitionServices: boolean;
  sustainingServices: boolean;
  consultationServices: boolean;
  notes?: string;
  createdAt: string;
}

const AdminPage = () => {
  const [exportData, setExportData] = useState<string>("");
  
  // API returns { success: true, data: Referral[] }
  const { data: response, isLoading, isError, refetch } = useQuery<{ success: boolean, data: Referral[] }>({
    queryKey: ['/api/referrals'],
  });
  
  // Extract referrals array from the response
  const referrals = response?.data || [];

  // Generate CSV data when referrals change
  useEffect(() => {
    if (referrals && referrals.length > 0) {
      generateCSV(referrals);
    }
  }, [referrals]);

  const generateCSV = (data: Referral[]) => {
    // CSV headers
    const headers = [
      'ID', 'Client Name', 'Client DOB', 'Client Phone', 'Client Email', 'Client Address',
      'Referrer Name', 'Referrer Organization', 'Referrer Phone', 'Referrer Email',
      'Housing Transition', 'Housing Sustaining', 'Housing Consultation', 'Notes', 'Date Submitted'
    ].join(',');
    
    // Generate rows
    const rows = data.map(referral => {
      return [
        referral.id,
        `"${referral.clientName}"`,
        referral.clientDob,
        `"${referral.clientPhone}"`,
        `"${referral.clientEmail || ''}"`,
        `"${referral.clientAddress || ''}"`,
        `"${referral.referrerName}"`,
        `"${referral.referrerOrganization}"`,
        `"${referral.referrerPhone}"`,
        `"${referral.referrerEmail}"`,
        referral.transitionServices ? 'Yes' : 'No',
        referral.sustainingServices ? 'Yes' : 'No',
        referral.consultationServices ? 'Yes' : 'No',
        `"${referral.notes || ''}"`,
        formatDate(new Date(referral.createdAt))
      ].join(',');
    });
    
    // Combine headers and rows
    setExportData([headers, ...rows].join('\n'));
  };

  const downloadCSV = () => {
    if (!exportData) return;
    
    // Create blob and download link
    const blob = new Blob([exportData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `referrals-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8">
          <div className="text-center">
            <RefreshCw className="h-8 w-8 animate-spin mx-auto text-primary" />
            <p className="mt-4 text-lg">Loading referral data...</p>
          </div>
        </Card>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 bg-red-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Data</h2>
            <p className="mb-4">There was a problem loading the referrals. Please try again.</p>
            <Button onClick={() => refetch()} className="bg-primary text-white hover:text-white hover:bg-[#4ECDC4] hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md">
              Try Again
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-neutral-800 mb-4 md:mb-0">Referral Submissions</h1>
        <div className="flex space-x-4">
          <Button onClick={() => refetch()} variant="outline" className="flex items-center gap-2 border border-primary text-primary hover:text-white hover:bg-[#4ECDC4] hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md">
            <RefreshCw className="h-4 w-4" />
            Refresh Data
          </Button>
          <Button onClick={downloadCSV} className="flex items-center gap-2 bg-primary text-white hover:text-white hover:bg-[#4ECDC4] hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md" disabled={!referrals || referrals.length === 0}>
            <Download className="h-4 w-4" />
            Export to Excel (CSV)
          </Button>
        </div>
      </div>

      {(!referrals || referrals.length === 0) ? (
        <Card className="p-8 bg-neutral-50">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-neutral-700 mb-2">No Referrals Yet</h2>
            <p className="text-neutral-600">Referral submissions will appear here once received.</p>
          </div>
        </Card>
      ) : (
        <Card className="overflow-hidden border border-neutral-200">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead className="hidden md:table-cell">Referrer</TableHead>
                  <TableHead className="hidden md:table-cell">Services</TableHead>
                  <TableHead className="hidden lg:table-cell">Notes</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {referrals.map((referral) => (
                  <TableRow key={referral.id} className="hover:bg-neutral-50">
                    <TableCell className="font-medium">{referral.id}</TableCell>
                    <TableCell>
                      {referral.clientName}
                      <div className="text-xs text-neutral-500 mt-1 hidden sm:block">{referral.clientPhone}</div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {referral.referrerName}
                      <div className="text-xs text-neutral-500 mt-1">{referral.referrerOrganization}</div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex flex-col text-sm space-y-1">
                        {referral.transitionServices && <span>Transition</span>}
                        {referral.sustainingServices && <span>Sustaining</span>}
                        {referral.consultationServices && <span>Consultation</span>}
                      </div>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell max-w-[300px] truncate">
                      {referral.notes || "—"}
                    </TableCell>
                    <TableCell className="whitespace-nowrap">
                      {formatDate(new Date(referral.createdAt))}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}
    </div>
  );
};

export default AdminPage;